import * as yup from "yup";
import { AdvertsTypes, VehicleTypes } from "../../utils/adverts";

export const createAdvertSchema = yup.object().shape({
  advertsType: yup.string().oneOf(AdvertsTypes).required(),
  title: yup.string().required(),
  year: yup.string().required(),
  mileage: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  vehicleType: yup.string().oneOf(VehicleTypes).required(),
  coverImage: yup.string().required(),
  galleryImages: yup.array().of(yup.string()).required(),
});

export interface IAdvertCreateRequestTest
  extends yup.InferType<typeof createAdvertSchema> {}

export const updateAdvertSchema = yup.object().shape({
  advertsType: yup.string().oneOf(AdvertsTypes),
  title: yup.string(),
  year: yup.string(),
  mileage: yup.string(),
  price: yup.number(),
  description: yup.string(),
  vehicleType: yup.string().oneOf(VehicleTypes),
  coverImage: yup.string(),
  galleryImages: yup.array().of(yup.string()),
});
