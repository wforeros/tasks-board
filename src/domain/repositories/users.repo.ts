import { User } from 'domain/entities/user.entity';

export type Options = {
  includeTasks?: boolean;
};

export type Filter = {
  name?: string;
  email?: string;
  dateOfBirth?: Date;
};

export type UsersRepo = {
  getAll(filter: Filter): Promise<User[]>;
  getById(id: string, options: Options): Promise<User | null>;
  create(user: User): Promise<User>;
  update(id: string, user: User): Promise<User>;
  delete(id: string): Promise<boolean>;
};
