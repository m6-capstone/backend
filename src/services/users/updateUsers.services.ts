import AppDataSource from "../../data-source";
import {AppError} from "../../errors/AppError";
import { User } from "../../entities/user";
import { IUserUpdateRequest } from "../../interfaces/users";
import bcrypt from 'bcryptjs'

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
    password
    }: IUserUpdateRequest
    ) => {

  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.findOneBy({id});
  
  if(!users){
    throw new AppError("User not found", 400);
  }

  const newPassword = bcrypt.hashSync(password, 10)

  await userRepository.update(id,{
    name: name? name : users?.name,
    email: email? email : users?.email,
    cpf: cpf? cpf : users?.cpf,
    cellphone: cellphone? cellphone : users?.cellphone,
    birthdate: birthdate? birthdate : users?.birthdate,
    description: description? description : users?.description,
    isSeller: isSeller? isSeller : users?.isSeller,
    password: password? newPassword : users?.password
  })

  const user = await userRepository.findOneBy({id})

  return user
};
