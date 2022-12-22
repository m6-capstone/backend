// import { Schema } from "inspector";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAdvertCreateRequest } from "../../interfaces/adverts";
import { AdvertsTypes, VehicleTypes } from "../../utils/adverts";

export const createAdvertSchema = yup.object().shape({
  advertsType: yup.string().required(),
  title: yup.string().required(),
  year: yup.string().required(),
  mileage: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  vehicleType: yup.string().required(),
  coverImage: yup.string().required(),
  galleryImages: yup.array().of(yup.string()).required(),
});

export interface IAdvertCreateRequestTest
  extends yup.InferType<typeof createAdvertSchema> {}

export const updateAdvertSchema = yup.object().shape({
  advertsType: yup.string(),
  title: yup.string(),
  year: yup.string(),
  mileage: yup.string(),
  price: yup.number(),
  description: yup.string(),
  vehicleType: yup.string(),
  coverImage: yup.string(),
  galleryImages: yup.array().of(yup.string()),
});

 