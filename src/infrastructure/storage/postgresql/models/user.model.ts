import { DataTypes, Model } from 'sequelize';
import { TaskModel, tasksAlias } from './task.model';

export const userAlias = 'userData';
export type UserAttributes = {
  id?: number;
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  [tasksAlias]?: TaskModel[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};

export class UserModel extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public [tasksAlias]!: TaskModel[];
  public dateOfBirth!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export const userSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
};
