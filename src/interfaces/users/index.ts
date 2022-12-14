import { IAddresCreate, IAddresUpdate } from "../addres";


export interface IUserCreateRequest{
    name: string;
    email: string;
    cpf: string;
    cellphone: string;
    birthdate: string;
    description: string;
    isSeller: boolean;
    password: string;
}

export interface IUserCreateRequestComplete extends IAddresCreate{
    name: string;
    email: string;
    cpf: string;
    cellphone: string;
    birthdate: string;
    description: string;
    isSeller: boolean;
    password: string;
}

export interface IUserUpdateRequest extends IAddresUpdate{
    name?: string;
    email?: string;
    cpf?: string;
    cellphone?: string;
    birthdate?: string;
    description?: string;
    isSeller?: boolean;
    password?: string;
}