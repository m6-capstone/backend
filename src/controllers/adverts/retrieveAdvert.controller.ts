import { Request, Response } from "express";
import { retireveAdvertsService } from "../../services/adverts/retrieveAdvert.service";

export const retrieveAdvertsController = async (
  req: Request,
  res: Response
) => {
  const id: string = req.params.userId;
  const newAdverts = await retireveAdvertsService(id);
  return res.status(201).json(newAdverts);
};
