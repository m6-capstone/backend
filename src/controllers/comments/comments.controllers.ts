import { Request, Response } from "express"
import { ICommentsCreateRequest } from "../../interfaces/comments";
import { createCommentsService } from "../../services/comments/createComments.services";


export const createCommentsController = async (req: Request, res: Response) => {
    //advertsId: req.params.id
    //userId: req.users
    const { text, userId, advertsId }: ICommentsCreateRequest = req.body;
    
    const users = await createCommentsService({text, userId, advertsId});
    return res.status(201).json(users);
}
