import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts";
import AppError from "../../errors/AppError";
import { IAdvertCreateResponse, IAdvertListAllResponse } from "../../interfaces/adverts";
import { AuctionAdvert, CommonAdvert } from "../../utils/adverts";

export const retireveAdvertsService = async (userId: string) => {
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const commonAdverts: IAdvertCreateResponse[] = await advertsRepository.find({
    relations: { user: true },
    where: {
      user: { id: userId },
      advertsType: CommonAdvert,
      isPublished: true,
    },
  });

  const auctionAdverts: IAdvertCreateResponse[] = await advertsRepository.find({
    relations: { user: true },
    where: {
      user: { id: userId },
      advertsType: AuctionAdvert,
      isPublished: true,
    },
  });

  const adverts: IAdvertListAllResponse = {
    common: commonAdverts,
    auction: auctionAdverts,
  };

  return adverts;
};
