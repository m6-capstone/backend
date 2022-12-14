import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts";
import { User } from "../../entities/user";
import { AppError } from "../../errors/AppError";
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

  if(!user){
    throw new AppError("user not exists",400)
  }

  const newAdvert: IAdvertCreateResponse = advertsRepository.create({...AdvertsData,user:user!});
  await advertsRepository.save(newAdvert);

  return newAdvert;
};
