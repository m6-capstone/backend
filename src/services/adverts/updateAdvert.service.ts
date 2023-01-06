import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts";
import {AppError} from "../../errors/AppError";
import { IAdvertUpdateRequest } from "../../interfaces/adverts";

export const updateAdvertService = async (
  id: string,
  {
    advertsType,
    title,
    year,
    mileage,
    price,
    description,
    vehicleType,
    coverImage,
    galleryImages,
    isActive,
    isPublished,
  }: IAdvertUpdateRequest,
  userId: string
) => {
  const advertsRepository = AppDataSource.getRepository(Adverts);
  const findAdvert = await advertsRepository.findOne({
    relations: { user: true },
    where: { user: { id: userId }, id: id },
  });

  if (!findAdvert) {
    throw new AppError("Advert not Found", 400);
  }

  await advertsRepository.update(id, {
    advertsType: advertsType ? advertsType : findAdvert?.advertsType,
    title: title ? title : findAdvert?.title,
    year: year ? year : findAdvert?.year,
    mileage: mileage ? mileage : findAdvert?.mileage,
    price: price ? price : findAdvert?.price,
    description: description ? description : findAdvert?.description,
    vehicleType: vehicleType ? vehicleType : findAdvert?.vehicleType,
    coverImage: coverImage ? coverImage : findAdvert?.coverImage,
    galleryImages: galleryImages ? galleryImages : findAdvert?.galleryImages,
    isActive: isActive ? isActive : findAdvert?.isActive,
    isPublished: isPublished ? isPublished : findAdvert?.isPublished,
  });

  const advert = await advertsRepository.findOneBy({ id });

  return advert;
};
