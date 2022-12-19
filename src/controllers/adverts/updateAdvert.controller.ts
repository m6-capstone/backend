import { Request, Response } from "express";
import { IAdvertUpdateRequest } from "../../interfaces/adverts";
import { updateAdvertService } from "../../services/adverts/updateAdvert.service";

export const updateAdvertController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const advertData: IAdvertUpdateRequest = req.body;
  const adverts = await updateAdvertService(id, { ...advertData });
  return res.status(200).json(adverts);
};
