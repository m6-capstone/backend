export interface IAddresCreate {
  cep: string;
  state: string;
  street: string;
  city: string;
  number: string;
  complement: string;
}

export interface IAddresUpdate {
  cep?: string;
  state?: string;
  street?: string;
  city?: string;
  number?: string;
  complement?: string;
}
