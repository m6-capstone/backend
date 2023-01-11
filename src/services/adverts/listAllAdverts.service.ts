import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts";
import {
  IAdvertCreateResponse,
  IAdvertListAllResponse,
} from "../../interfaces/adverts";
import {
  AuctionAdvert,
  CommonAdvert,
  VehicleTypeCar,
  VehicleTypeMotorcycle,
} from "../../utils/adverts";

export const listAllAdvertsService = async () => {
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const commonAdverts: IAdvertCreateResponse[] = await advertsRepository.findBy(
    {
      advertsType: CommonAdvert,
      isPublished: true,
    }
  );
  const auctionAdverts: IAdvertCreateResponse[] =
    await advertsRepository.findBy({
      advertsType: AuctionAdvert,
      isPublished: true,
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
