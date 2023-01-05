import { Request, Response } from "express";
import {
  IAdvertCreateRequest,
  IAdvertCreateResponse,
} from "../../interfaces/adverts";
import { createAdvertService } from "../../services/adverts/createAdvert.service";

export const createAdvertController = async (req: Request, res: Response) => {
  const advertsData: IAdvertCreateRequest = req.body;
  const userId:string = req.users.userId;
  const newAdverts: IAdvertCreateResponse = await createAdvertService(
    advertsData,userId
  );
  return res.status(201).json(newAdverts);
};
