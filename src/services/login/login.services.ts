import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/user";
import { ILoginRequest } from "../../interfaces/login";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export const createLoginService = async ({
  email,
  password,
}: ILoginRequest) => {
  const usersRepository = AppDataSource.getRepository(User);
  const users = await usersRepository.findOne({ where: { email } });

  if (!users) {
    throw new AppError("E-mail invalid", 403);
  }

  const matchPassword = await compare(password, users?.password);
  if (!matchPassword) {
    throw new AppError("Password invalid", 403);
  }

  const token = jwt.sign({}, process.env.JWT_SECRET as string, {
    subject: users.id,
    expiresIn: "1d",
  });

  return token;
};
