import { buildGetAll } from './get-all';
import { build as buildCreateOne } from './create-one';
import { build as buildGetOne } from './get-one';
import { usersPsqlImpl } from '@domain/repositories';

const dependencies = {
  usersRepo: usersPsqlImpl
};
const getAll = buildGetAll(dependencies);
const create = buildCreateOne(dependencies);
const getOne = buildGetOne(dependencies);

export { getAll, create, getOne };
