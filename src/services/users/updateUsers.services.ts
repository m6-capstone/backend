import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/user";
import { IUserUpdateRequest } from "../../interfaces/users";
import bcrypt from "bcryptjs";
import { Address } from "../../entities/address";

export const updateUserService = async (
  id: string,
  {
    name,
    email,
    cpf,
    cellphone,
    birthdate,
    description,
    isSeller,
    password,
    cep,
    state,
    street,
    city,
    number,
    complement,
  }: IUserUpdateRequest
) => {
  const adressRepository = AppDataSource.getMongoRepository(Address);
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.findOneBy({ id });

  if (!users) {
    throw new AppError("User not found", 400);
  }

  const addres = await adressRepository.findOneBy({ id: users.address.id });

  await userRepository.update(id, {
    name: name ? name : users?.name,
    email: email ? email : users?.email,
    cpf: cpf ? cpf : users?.cpf,
    cellphone: cellphone ? cellphone : users?.cellphone,
    birthdate: birthdate ? birthdate : users?.birthdate,
    description: description ? description : users?.description,
    isSeller: isSeller ? isSeller : users?.isSeller,
    password: password ? password : users?.password,
  });

  await adressRepository.update(users.address.id, {
    cep: cep ? cep : addres?.cep,
    state: state ? state : addres?.state,
    street: street ? street : addres?.street,
    city: city ? city : addres?.city,
    number: number ? number : addres?.number,
    complement: complement ? complement : addres?.complement,
  });

  const user = await userRepository.findOneBy({ id });

  return user;
};
