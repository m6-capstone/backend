import AppDataSource from "../../data-source";
import AppError from "../../errors/AppError";
import { User } from "../../entities/user";
import { IUserCreateRequest } from "../../interfaces/users";
import { hash } from 'bcryptjs'

export const createUserService = async ({
  name,
  email,
  cpf,
  cellphone,
  birthdate,
  description,
  isSeller,
  password
}: IUserCreateRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find()

  const emailAlreadyExists = users.find(users => users.email === email)

  if(emailAlreadyExists){
    throw new AppError("Email already exists", 401)
  }

  const newPassword = await hash(password, 10)

  const user = userRepository.create({name,email,cpf,cellphone,birthdate,description,isSeller,password: newPassword});
  
  await userRepository.save(user);

  return user
};
