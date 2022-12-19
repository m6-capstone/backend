import { Request, Response } from "express";
import {
  IAdvertCreateRequest,
  IAdvertCreateResponse,
} from "../../interfaces/adverts";
import { createAdvertService } from "../../services/adverts/createAdvert.service";

export const createAdvertController = async (req: Request, res: Response) => {
  const advertsData: IAdvertCreateRequest = req.body;
  const newAdverts: IAdvertCreateResponse = await createAdvertService(
    advertsData
  );
  return res.status(201).json(newAdverts);
};
