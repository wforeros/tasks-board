import { UsersPSQLRepository } from '@infra/storage/postgresql/repositories/users.psql';
import { buildGetAll } from './users/get-all';
import { build as buildCreateOne } from './users/create-one';

const usersRepo = new UsersPSQLRepository();
const getAll = buildGetAll({ usersRepo });
const create = buildCreateOne({ usersRepo });

export { getAll, create };
