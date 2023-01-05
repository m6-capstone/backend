import { Request, Response } from "express"
import { ICommentsCreateRequest } from "../../interfaces/comments";
import { createCommentsService } from "../../services/comments/createComments.services";
import { listCommentsService } from "../../services/comments/listComments.services";

export const createCommentsController = async (req: Request, res: Response) => {
    //advertsId: req.params.id;
    //userId: req.users;
    const { text, userId, advertsId }: ICommentsCreateRequest = req.body;
    
    const comments = await createCommentsService({text, userId, advertsId});
    return res.status(201).json(comments);
}

export const listCommentsController = async (req: Request, res: Response) => {
    const comments = await listCommentsService();
    return res.status(200).json(comments);
}