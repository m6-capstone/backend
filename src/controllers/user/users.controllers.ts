import { Request, Response } from "express"
import { IUserCreateRequest } from "../../interfaces/users"
import { createUserService } from "../../services/users/createUsers.services"

export const createUserController = async (req: Request, res: Response) => {
    const UserData: IUserCreateRequest = req.body;
    
    const users = await createUserService(UserData);
    return res.status(201).json(users)
}