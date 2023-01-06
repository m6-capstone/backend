import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts";
import { AppError } from "../../errors/AppError";

export const retireveAdvertService = async (id: string) => {
  const advertsRepository = AppDataSource.getRepository(Adverts);

  const advert = await advertsRepository.findOne({
    relations: { user: true },
    where: { id: id },
  });

  if (!advert) {
    throw new AppError("advert Not Found", 400);
  }
  return advert;
};
