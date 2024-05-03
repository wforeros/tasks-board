import loadenv from '@infra/libs/env';

const runApp = async () => {
  await loadenv();

  const startDatabase = async () => {
    const { clients, createPSQLConn: createConnection, isConnected } = await import('@infra/storage/postgresql');
    createConnection(
      {
        databaseName: process.env.DATABASE || 'database-name',
        databaseUser: process.env.DATABASE_USER || 'user',
        databasePassword: process.env.DATABASE_PASSWORD || 'postgres',
        databaseHost: process.env.DATABASE_HOST || 'localhost',
        databasePort: process.env.DATABASE_PORT || '5432',
        databaseDriver: 'postgres'
      },
      'default'
    );
    const client = clients.get('default');
    if (client) {
      await isConnected(client);
    }
  };
  const startWebApp = async () => {
    const { App } = await import('@infra/web');
    const app = new App();
    app.start();
  };

  try {
    await startWebApp();
    //await startDatabase();
  } catch (error: unknown) {
    if (error instanceof Error) console.error(`ERROR : ${error.message} STACK : ${error.stack}`);
  }
};

runApp();
