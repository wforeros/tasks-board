import { UsersPSQLRepository } from '@infra/storage/postgresql/repositories/users.psql';
import { buildGetAll } from './get-all';
import { build as buildCreateOne } from './create-one';
import { build as buildGetOne } from './get-one';

const usersRepo = new UsersPSQLRepository();
const getAll = buildGetAll({ usersRepo });
const create = buildCreateOne({ usersRepo });
const getOne = buildGetOne({ usersRepo });

export { getAll, create, getOne };
