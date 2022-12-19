import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts";
import {
  IAdvertCreateRequest,
  IAdvertCreateResponse,
} from "../../interfaces/adverts";

export const createAdvertService = async (
  AdvertsData: IAdvertCreateRequest
) => {
  const advertsRepository = AppDataSource.getRepository(Adverts);

  const newAdvert: IAdvertCreateResponse = advertsRepository.create({
    ...AdvertsData,
  });
  await advertsRepository.save(newAdvert);

  return newAdvert;
};
