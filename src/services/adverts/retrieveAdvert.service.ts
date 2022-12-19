
import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts";
import AppError from "../../errors/AppError";
import { IAdvertCreateResponse } from "../../interfaces/adverts";
 
export const retireveAdvertsService = async (id: string) => {
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const adverts:IAdvertCreateResponse[] = await advertsRepository.findBy({
    userId: id,
  });
 
  if (!adverts) {
    throw new AppError("User not Found", 400);
  }
  return adverts;
};
 
