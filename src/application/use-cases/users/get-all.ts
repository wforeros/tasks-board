import { UsersRepo } from 'domain/repositories/users.repo';

type Dependencies = {
  usersRepo: UsersRepo;
};

export const buildGetAll = ({ usersRepo }: Dependencies) => {
  const execute = async () => {
    const users = await usersRepo.getAll({});
    return users;
  };
  return execute;
};
