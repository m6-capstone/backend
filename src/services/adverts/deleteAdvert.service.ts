import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts";
import AppError from "../../errors/AppError";
import { IAdvertDeleteReponse } from "../../interfaces/adverts";

export const deleteAdvertService = async (id: string, userId: string) => {
  const advertsRepository = AppDataSource.getRepository(Adverts);

  const advert = await advertsRepository.findOne({
    relations: { user: true },
    where: { user: { id: userId }, id: id },
  });

  if (!advert) {
    throw new AppError("Advert not Found", 400);
  }

  await advertsRepository.delete({ id });
  const resposta: IAdvertDeleteReponse = { message: "Advert has been deleted" };
  return resposta;
};
