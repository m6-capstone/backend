import AppDataSource from "../../data-source";
import {AppError} from "../../errors/AppError";
import { User } from "../../entities/user";
import { IUserCreateRequest } from "../../interfaces/users";
import { hash } from "bcryptjs";
import { Address } from "../../entities/address";
import { IAddresCreate } from "../../interfaces/addres";

export const createUserService = async (
  userData: IUserCreateRequest,
  addresData: IAddresCreate
) => {
  const userRepository = AppDataSource.getRepository(User);
  const addresRepository = AppDataSource.getRepository(Address);

  const emailAlreadyExists = await userRepository.findOneBy({email: userData.email})

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 401);
  }
  const newAddres = addresRepository.create({ ...addresData });
  await addresRepository.save(newAddres);
  const user = userRepository.create({
    ...userData,
    adverts: [],
    comments: [],
    address: newAddres,
  });

  await userRepository.save(user);

  return user;
};
