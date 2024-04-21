import { IUniversity } from '@interfaces';

export interface IBody {
  name: string;
  content: string;
  city_id: number;
}

export interface IResponse {
  data: IUniversity;
}
