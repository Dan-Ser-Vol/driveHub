
export interface IPost {
  id: number,
  brand: string,
  model: string,
  year: number,
  image: string[],
  bodyType: string,
  createdAt: string,
  currency: string,
  description: string,
  mileage: number,
  price: number,
  region: string,
  sold: boolean,
  status: string,
  updatedAt: string,
}

export interface IPostRes {
  data: IPost[];
  total: number;
  limit: number;
  offset: number;
  order: string;
  orderBy: string;
}

