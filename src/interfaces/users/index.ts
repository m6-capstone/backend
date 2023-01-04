export interface IUserCreateRequest{
    name: string;
    email: string;
    cpf: string;
    cellphone: string;
    birthdate: string;
    description: string;
    isSeller: boolean;
    password: string;
    isActive: boolean;
}