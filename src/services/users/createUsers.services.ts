import AppDataSource from "../../data-source";
import { Users } from "../../entities/users";
import { IUserCreateRequest } from "../../interfaces/users";

export const createUserService = async (UserData: IUserCreateRequest) => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = userRepository.create({...UserData});
  await userRepository.save(users);

  return users
};
