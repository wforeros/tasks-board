import { build as buildCreateOne } from './create-one';
import { build as buildGetOne } from './get-one';
import { tasksPsqlImpl } from '@domain/repositories';

const createOne = buildCreateOne({ tasksRepo: tasksPsqlImpl });
const getOne = buildGetOne({ tasksRepo: tasksPsqlImpl });

export { createOne, getOne };
