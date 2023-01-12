import { userInfo } from "os";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  await userRepository.delete(id);

  return { message: "User has been Deleted" };
};
