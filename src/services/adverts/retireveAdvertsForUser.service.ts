import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts";
import { AppError } from "../../errors/AppError";
import {
  IAdvertCreateResponse,
  IAdvertListAllResponse,
} from "../../interfaces/adverts";
import {
  AuctionAdvert,
  CommonAdvert,
  VehicleTypeMotorcycle,
  VehicleTypeCar,
} from "../../utils/adverts";

export const retireveAdvertsForUserService = async (userId: string) => {
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
    common: {
      cars: commonAdverts.filter((c) => c.vehicleType == VehicleTypeCar),
      motorcycles: commonAdverts.filter(
        (m) => m.vehicleType == VehicleTypeMotorcycle
      ),
    },
    auction: auctionAdverts,
  };

  return adverts;
};
