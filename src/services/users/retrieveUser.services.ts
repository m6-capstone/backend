import AppDataSource from "../../data-source";
import { User } from "../../entities/user";

export const retrieveUserService = async (userId: string) => {
  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOne({
    relations: { adverts: true },
    where: { id: userId },
  });

  return user;
};
