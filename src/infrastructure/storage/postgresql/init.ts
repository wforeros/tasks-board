import { TaskModel, tasksAlias, taskSchema } from './models/task.model';
import { UserModel, userAlias, userSchema } from './models/user.model';
import { TableNames } from './table-names-enum';

const configModels = (sequelize: any, tableName: TableNames) => {
  return {
    sequelize,
    tableName,
    underscored: true,
    timestamps: true,
    paranoid: true
  };
};

export const setupModels = async (sequelize: any) => {
  UserModel.init(userSchema, configModels(sequelize, TableNames.USER_TABLE));
  await UserModel.sync();

  TaskModel.init(taskSchema, configModels(sequelize, TableNames.TASK_TABLE));
  await TaskModel.sync();

  UserModel.hasMany(TaskModel, {
    foreignKey: 'author_id',
    as: tasksAlias
  });
  TaskModel.belongsTo(UserModel, {
    foreignKey: 'author_id',
    as: userAlias
  });
  // Associations
};
