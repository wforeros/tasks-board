import { ErrorBadRequest } from '@domain/errors/bad-request';
import { ErrorResourceNotFound } from '@domain/errors/resource-not-found';
import { Options, UsersRepo } from '@domain/repositories/users.repo';

type Dependencies = {
  usersRepo: UsersRepo;
};

export const build = ({ usersRepo }: Dependencies) => {
  const execute = async (id: string, options: Options) => {
    if (!id) throw new ErrorBadRequest('Id is required');
    if (!options) options = { includeTasks: true };
    const user = await usersRepo.getById(id, options);
    if (!user) throw new ErrorResourceNotFound('User not found');
    return user;
  };
  return execute;
};
