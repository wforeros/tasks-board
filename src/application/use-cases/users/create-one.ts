import { User } from '@domain/entities/user.entity';
import { ErrorBadRequest } from '@domain/errors/bad-request';
import { UsersRepo } from '@domain/repositories/users.repo';

type Dependencies = {
  usersRepo: UsersRepo;
};

export const build = ({ usersRepo }: Dependencies) => {
  const execute = async (user: User) => {
    if (!user.name || !user.email || !user.password) {
      throw new ErrorBadRequest('Missing required fields');
    }
    const res = await usersRepo.getAll({ email: user.email });
    if (res && res.length > 0) {
      throw new ErrorBadRequest('User already exists');
    }
    return await usersRepo.create(user);
  };
  return execute;
};
