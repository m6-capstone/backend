import { Request, Response } from "express";
import { retireveAdvertsService } from "../../services/adverts/retrieveAdvert.service";

export const retrieveAdvertsController = async (
  req: Request,
  res: Response
) => {
  const userId: string = req.params.userId;
  const newAdverts = await retireveAdvertsService(userId);
  return res.status(201).json(newAdverts);
};
