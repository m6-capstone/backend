import AppDataSource from "../../data-source";
import {AppError} from "../../errors/AppError";
import { User } from "../../entities/user";
import { IUserCreateRequest } from "../../interfaces/users";
import { hash } from "bcryptjs";
import { Address } from "../../entities/address";
import { IAddresCreate } from "../../interfaces/addres";



export const createUserService = async (
  {
    name,
    email,
    cpf,
    cellphone,
    birthdate,
    description,
    isSeller,
    password,
  }: IUserCreateRequest,
  addresData: IAddresCreate
) => {
  const userRepository = AppDataSource.getRepository(User);
  const addresRepository = AppDataSource.getRepository(Address);
  const users = await userRepository.find();

  const emailAlreadyExists = users.find((users) => users.email === email);

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 401);
  }

  const newAddres = addresRepository.create({ ...addresData });

  await addresRepository.save(newAddres);

  const newPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    cpf,
    cellphone,
    birthdate,
    description,
    isSeller,
    password: newPassword,
    adverts: [],
    comments: [],
    address: newAddres,
  });

  await userRepository.save(user);

  return user;
};
