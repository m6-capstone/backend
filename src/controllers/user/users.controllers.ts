import { Request, Response } from "express"
import { IUserCreateRequest, IUserUpdateRequest } from "../../interfaces/users"
import { createUserService } from "../../services/users/createUsers.services"
import { updateUserService } from "../../services/users/updateUsers.services"

export const createUserController = async (req: Request, res: Response) => {
    const UserData: IUserCreateRequest = req.body;
    
    const users = await createUserService({...UserData});
    return res.status(201).json(users);
}

export const updateUserController = async (req: Request, res: Response) => {
    const UserData: IUserUpdateRequest = req.body;
    const id: string = req.params.id;

    const users = await updateUserService(id, {...UserData});
    return res.status(200).json(users);
}