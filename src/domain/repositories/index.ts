import { TasksPsqlImpl } from '@infra/storage/postgresql/repositories/tasks.psql';
import { UsersPSQLRepository } from '@infra/storage/postgresql/repositories/users.psql';

const usersPsqlImpl = new UsersPSQLRepository();
const tasksPsqlImpl = new TasksPsqlImpl();

export { usersPsqlImpl, tasksPsqlImpl };
