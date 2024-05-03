import { Dialect, Sequelize } from 'sequelize';
import { setupModels } from './init';

type IPostgresConfig = {
  databaseName: string;
  databaseUser: string;
  databasePassword: string;
  databaseHost: string;
  databasePort: string;
  databaseDriver: Dialect;
};

export const clients: Map<string, Sequelize> = new Map();
export const createPSQLConn = async (
  { databaseName, databaseUser, databasePassword, databaseHost, databasePort, databaseDriver }: IPostgresConfig,
  keyName: string,
  setupModels?: (sequelize: Sequelize) => Promise<any>
) => {
  const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
    port: +databasePort,
    host: databaseHost,
    dialect: databaseDriver,
    logging: msg => console.debug(`[DB LOG]: ${msg}`)
  });
  if (await isConnected(sequelize)) {
    if (setupModels) {
      await setupModels(sequelize);
    }
    clients.set(keyName, sequelize);
  }
};

export const isConnected = async (sequelize: Sequelize) => {
  try {
    await sequelize.authenticate();
    console.info(`Connection has been established successfully to PostgreSQL.`);
    return true;
  } catch (err: unknown) {
    if (err instanceof Error) console.error('Unable to connect to the database:', err);
    return false;
  }
};
