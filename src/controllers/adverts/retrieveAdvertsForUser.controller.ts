import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { retireveAdvertsForUserService } from "../../services/adverts/retireveAdvertsForUser.service";


export const retireveAdvertsForUserController = async (
  req: Request,
  res: Response
) => {
  const userId: string = req.params.userId;
  const newAdverts = await retireveAdvertsForUserService(userId);
  return res.status(201).json(instanceToPlain(newAdverts));
};
