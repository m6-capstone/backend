import { Request, Response } from "express";
import {
  IUserCreateRequestComplete,
  IUserUpdateRequest,
} from "../../interfaces/users";
import { createUserService } from "../../services/users/createUsers.services";
import { updateUserService } from "../../services/users/updateUsers.services";
import { listUserService } from "../../services/users/listUsers.services";
import { retrieveUserService } from "../../services/users/retrieveUser.services";
import { autoRetrieveUserService } from "../../services/users/autoRetrieve.services";

export const createUserController = async (req: Request, res: Response) => {
  const {
    name,
    email,
    cpf,
    cellphone,
    birthdate,
    description,
    isSeller,
    password,
    ...addresData
  }: IUserCreateRequestComplete = req.body;

  const users = await createUserService(
    { name, email, cpf, cellphone, birthdate, description, isSeller, password },
    addresData
  );
  return res.status(201).json(users);
};

export const listUserController = async (req: Request, res: Response) => {
  const users = await listUserService();
  return res.status(200).json(users);
};

export const updateUserController = async (req: Request, res: Response) => {
  const UserData: IUserUpdateRequest = req.body;
  const id: string = req.params.id;

  const users = await updateUserService(id, { ...UserData });
  return res.status(200).json(users);
};

export const retrieveUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const users = await retrieveUserService(id);
  return res.status(200).json(users);
};

export const autoRetrieveUserController = async (
  req: Request,
  res: Response
) => {
  const id: string = req.users.userId;

  const users = await autoRetrieveUserService(id);
  return res.status(200).json(users);
};
