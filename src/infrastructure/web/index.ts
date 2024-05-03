import express, { json, urlencoded } from 'express';
import morgan from '@infra/libs/morgan';
import { apiSpec, OpenApiValidator } from '@infra/libs/open-api';
import cors from 'cors';
import router from './routes';
import { swaggerUi, swaggerDocument } from '@infra/libs/swagger-ui';
import { errorHandler } from '@infra/web/middlewares/error-handler';

const HTTP_PORT = process.env.PORT || 3000;
const OPENAPI_SPEC = process.env.OPENAPI_SPEC || '/spec';
const OPENAPI_DOCS = process.env.OPENAPI_DOCS || '/docs';

export class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.setUp();
  }

  setUp() {
    //SETTINGS
    this.app.set('port', HTTP_PORT);
    //MIDDLEWARES
    /**Morgan to see logs in dev */
    this.app.use(
      morgan().unless({
        path: ['/', '/readiness', '/healthy']
      })
    );
    /**Static files */
    this.app.use(json({ limit: '10mb' }));
    this.app.use(urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use('/content', express.static('public'));
    this.app.options('*', cors);
    /**Swagger UI */
    this.app.use(OPENAPI_DOCS, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  routes() {
    this.app.use(router);
  }

  configOpenAPi() {
    /**Add route to dowloand OAS file */
    this.app.use(OPENAPI_SPEC, express.static(apiSpec || ''));
    /**Install Validator in Express App */
    this.app.use(OpenApiValidator);
  }

  initErrorHandler() {
    /**Error Handler */
    this.app.use(errorHandler);
  }

  start() {
    try {
      this.configOpenAPi();
      this.routes();
      this.initErrorHandler();
      this.app.listen(this.app.get('port'), () => {
        console.info(`👽 Express Application Running on port ${this.app.get('port')}`);
      });
    } catch (error: unknown) {
      if (error instanceof Error) console.error(`ERROR : ${error.message} STACK : ${error.stack}`);
    }
  }
}
