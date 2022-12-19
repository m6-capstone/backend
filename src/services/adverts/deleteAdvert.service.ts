import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts";
import AppError from "../../errors/AppError";
import { IAdvertDeleteReponse } from "../../interfaces/adverts";

export const deleteAdvertService = async (id: string) => {
  const advertsRepository = AppDataSource.getRepository(Adverts);

  const advert = await advertsRepository.findOneBy({ id });

  if (!advert) {
    throw new AppError("Advert not Found", 400);
  }
  await advertsRepository.delete({ id });
  const resposta: IAdvertDeleteReponse = { message: "Advert has been deleted" };
  return resposta;
};
