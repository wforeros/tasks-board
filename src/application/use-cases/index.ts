import { UsersPSQLRepository } from '@infra/storage/postgresql/repositories/users.psql';
import { buildGetAll } from './users/get-all';

const usersRepo = new UsersPSQLRepository();
const getAll = buildGetAll({ usersRepo });

export { getAll };
