import { Request, Response } from "express";
import { ICommentsCreateRequest, ICommentsUpdateRequest } from "../../interfaces/comments";
import { createCommentsService } from "../../services/comments/createComments.services";
import { deleteCommentsService } from "../../services/comments/deleteComments.services";
import { listCommentsService } from "../../services/comments/listComments.services";
import { updateCommentsService } from "../../services/comments/updateComments.services";

export const createCommentsController = async (req: Request, res: Response) => {
  const { text }: ICommentsCreateRequest = req.body;
  const userId = req.users.userId;
  const advertsId: string = req.params.id;

  const comments = await createCommentsService({ text, userId, advertsId });
  return res.status(201).json(comments);
};

export const listCommentsController = async (req: Request, res: Response) => {
  const comments = await listCommentsService();
  return res.status(200).json(comments);
};

export const deleteCommentsController = async (req: Request, res: Response) => {
  const commentsId: string = req.params.id;
  const userId: string =  req.users.userId

  const comments = await deleteCommentsService(commentsId, userId);
  return res.status(204).json(comments);
};

export const updateCommentsController = async (req: Request, res: Response) => {
  const commentsId = req.params.id;
  const { text }: ICommentsUpdateRequest = req.body;

  const comments = await updateCommentsService({ text, commentsId });
  return res.status(200).json(comments);
};