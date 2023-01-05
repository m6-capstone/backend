import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts";
import { User } from "../../entities/user";
import {
  IAdvertCreateRequest,
  IAdvertCreateResponse,
} from "../../interfaces/adverts";

export const createAdvertService = async (
  AdvertsData: IAdvertCreateRequest,
  userId: string
) => {
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });

  const newAdvert: IAdvertCreateResponse = advertsRepository.create({
    ...AdvertsData,
    user: user!,
  });
  await advertsRepository.save(newAdvert);

  return newAdvert;
};
