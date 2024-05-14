import { TasksPsqlImpl } from '@infra/storage/postgresql/repositories/tasks.psql';
import { build as buildCreateOne } from './create-one';
import { build as buildGetOne } from './get-one';

const tasksRepo = new TasksPsqlImpl();
const createOne = buildCreateOne({ tasksRepo });
const getOne = buildGetOne({ tasksRepo });

export { createOne, getOne };
