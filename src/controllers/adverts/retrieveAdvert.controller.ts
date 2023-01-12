import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { retireveAdvertService } from "../../services/adverts/retrieveAdvert.service";

export const retrieveAdvertController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const newAdverts = await retireveAdvertService(id);
  return res.status(201).json(instanceToPlain(newAdverts));
};
