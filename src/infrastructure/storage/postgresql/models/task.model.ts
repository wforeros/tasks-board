import { DataTypes, Model } from 'sequelize';
import { UserModel } from './user.model';

export const authorData = 'authorData';
export type TaskAttributes = {
  id?: number;
  title: string;
  status: string;
  description: string;
  authorId: number;
  [authorData]?: UserModel;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};

export class TaskModel extends Model<TaskAttributes> implements TaskAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public status!: string;
  public authorId!: number;
  public dueDate!: Date;
  public [authorData]!: UserModel;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export const taskSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  authorId: {
    type: DataTypes.INTEGER,
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
