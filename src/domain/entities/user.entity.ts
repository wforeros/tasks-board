import { Task } from './task.entity';

export type IUser = {
  id?: string;
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  tasksData?: Task[];
};

export class User implements IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  tasksData!: Task[];

  constructor(user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.dateOfBirth = user.dateOfBirth;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.deletedAt = user.deletedAt;
  }

  toDto() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      date_of_birth: this.dateOfBirth,
      created_at: this.createdAt,
      updated_at: this.updatedAt,
      deleted_at: this.deletedAt
    };
  }

  static fromDto(userApi: object) {
    const user = new User({
      id: userApi['id'],
      name: userApi['name'],
      email: userApi['email'],
      password: userApi['password'],
      dateOfBirth: userApi['date_of_birth'],
      createdAt: userApi['created_at'],
      updatedAt: userApi['updated_at'],
      deletedAt: userApi['deleted_at']
    });
    return user;
  }
}
