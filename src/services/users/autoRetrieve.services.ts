import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts";
import { User } from "../../entities/user";
import {
  CommonAdvert,
  AuctionAdvert,
  VehicleTypeCar,
  VehicleTypeMotorcycle,
} from "../../utils/adverts";
export const autoRetrieveUserService = async (userId: string) => {
  const usersRepository = AppDataSource.getRepository(User);
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const user = await usersRepository.findOne({
    where: { id: userId },
  });

  const adverts = await advertsRepository.find({
    relations: { user: true },
    where: { user: { id: userId } },
  });

  const retorno = {
    ...user,
    adverts: {
      common: {
        cars: adverts.filter(
          (c) =>
            c.advertsType == CommonAdvert && c.vehicleType == VehicleTypeCar
        ),
        motorcycles: adverts.filter(
          (m) =>
            m.advertsType == CommonAdvert &&
            m.vehicleType == VehicleTypeMotorcycle
        ),
      },
      auction: adverts.filter((a) => a.advertsType == AuctionAdvert),
    },
  };

  return retorno;
};
