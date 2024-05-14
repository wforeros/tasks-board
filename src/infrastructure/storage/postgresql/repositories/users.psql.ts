import { User } from 'domain/entities/user.entity';
import { Filter, UsersRepo } from 'domain/repositories/users.repo';
import { UserAttributes, UserModel } from '../models/user.model';

export class UsersPSQLRepository implements UsersRepo {
  async getAll(filter: Filter): Promise<User[]> {
    const users = await UserModel.findAll({
      where: filter
    });
    let userRes: User[] = [];
    if (users.length > 0) {
      userRes = users.map(u => mapToEntity(u));
    }
    return userRes;
  }

  async getById(id: string): Promise<User | null> {
    const user = await UserModel.findByPk(id);
    if (!user) return null;
    return mapToEntity(user);
  }
  async create(user: User): Promise<User> {
    const userModel = await UserModel.create(mapToModel(user));
    return mapToEntity(userModel);
  }

  async update(id: string, user: User): Promise<User> {
    const mappedUser = mapToModel(user);
    const [, affectedRows] = await UserModel.update(mappedUser, {
      where: { id },
      returning: true
    });
    const updatedUser = affectedRows[0].get({ plain: true });
    return mapToEntity(updatedUser);
  }
  async delete(id: string): Promise<boolean> {
    const res = await UserModel.destroy({ where: { id } });
    return res == 0 ? false : true;
  }
}

export function mapToEntity(user: UserAttributes): User {
  return new User({
    id: user.id ? user.id.toString() : undefined,
    name: user.name,
    email: user.email,
    password: user.password,
    dateOfBirth: user.dateOfBirth,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    deletedAt: user.deletedAt
  });
}

export function mapToModel(user: User) {
  const userAtt: UserAttributes = {
    id: user.id ? parseInt(user.id) : undefined,
    name: user.name,
    email: user.email,
    password: user.password,
    dateOfBirth: user.dateOfBirth,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    deletedAt: user.deletedAt
  };
  return userAtt;
}
