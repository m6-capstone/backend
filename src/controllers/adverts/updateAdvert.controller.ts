import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IAdvertUpdateRequest } from "../../interfaces/adverts";
import { updateAdvertService } from "../../services/adverts/updateAdvert.service";

export const updateAdvertController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const userId:string = req.users.userId;
  const advertData: IAdvertUpdateRequest = req.body;
  const adverts = await updateAdvertService(id, { ...advertData },userId);
  return res.status(200).json(instanceToPlain(adverts));
};
