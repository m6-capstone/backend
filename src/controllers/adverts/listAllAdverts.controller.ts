import { Request, Response } from "express";
import { IAdvertListAllResponse } from "../../interfaces/adverts";
import { listAllAdvertsService } from "../../services/adverts/listAllAdverts.service";

export const listAllAdvertsController = async (req: Request, res: Response) => {
  const newAdverts: IAdvertListAllResponse = await listAllAdvertsService();
  return res.status(200).json(newAdverts);
};
