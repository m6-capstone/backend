import { Request, Response } from "express"
import { ILoginRequest } from "../../interfaces/login";
import { createLoginService } from "../../services/login/login.services";

export const createLoginController = async (req: Request, res: Response) => {
    const {email, password}: ILoginRequest = req.body;
    const token = await createLoginService({email,password});
    return res.status(201).json({token: token});
}
