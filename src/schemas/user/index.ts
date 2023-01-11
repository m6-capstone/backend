import * as yup from "yup";
import { hashSync } from "bcryptjs";
export const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .transform((value, originalValue) => hashSync(originalValue, 10)),
  cpf: yup.string().required(),
  cellphone: yup.string().required(),
  birthdate: yup.string().required(),
  description: yup.string().required(),
  isSeller: yup.boolean().required(),
  cep: yup.string().required(),
  state: yup.string().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string().required(),
});

export const updateUserSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  password: yup
    .string()
    .transform((value, originalValue) => hashSync(originalValue, 10)),
  cpf: yup.string(),
  cellphone: yup.string(),
  birthdate: yup.string(),
  description: yup.string(),
  isSeller: yup.boolean(),
  cep: yup.string(),
  state: yup.string(),
  street: yup.string(),
  city: yup.string(),
  number: yup.string(),
  complement: yup.string(),
});
