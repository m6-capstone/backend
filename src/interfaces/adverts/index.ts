import * as yup from "yup";
import { OptionalArraySchema } from "yup/lib/array";
import { AnyObject } from "yup/lib/types";

export interface IAdvertCreateRequest {
  advertsType: string;
  title: string;
  year: string;
  mileage: string;
  price: number;
  description: string;
  vehicleType: string;
  coverImage: string;
  galleryImages: any;
}

export interface IAdvertCreateResponse extends IAdvertCreateRequest {
  isActive: boolean;
  isPublished: boolean;
}

export interface IAdvertUpdateRequest {
  advertsType?: string;
  title?: string;
  year?: string;
  mileage?: string;
  price?: number;
  description?: string;
  vehicleType?: string;
  coverImage?: string;
  galleryImages?: string[];
  isActive?: boolean;
  isPublished?: boolean;
}
export interface IAdvertDeleteReponse {
  message: string;
}

export interface IAdvertListAllResponse {
  common: IAdvertCreateResponse[];
  auction: IAdvertCreateResponse[];
}
