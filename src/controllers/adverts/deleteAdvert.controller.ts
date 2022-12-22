import { Request, Response } from "express";
import { IAdvertDeleteReponse } from "../../interfaces/adverts";
import { deleteAdvertService } from "../../services/adverts/deleteAdvert.service";

export const deleteAdvertController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const message: IAdvertDeleteReponse = await deleteAdvertService(id);
  return res.status(202).json(message);
};
