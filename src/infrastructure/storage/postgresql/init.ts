import { UserModel, userSchema } from './models/user.model';
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
  // Associations
};
