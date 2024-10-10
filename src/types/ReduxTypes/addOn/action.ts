/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

import { IUser } from '../auth';

export interface IAddOn {
  _id?: string;
  name: string;
  price: number;
  description: string;
}

export interface IProviders {
  _id: string;
  country: string;
  city: string;
  vendor: string;
  expertise: string;
  service: string;
  areaCode: number;
  phone: string;
  email: string;
  type: string;
}

export interface IRecommendation {
  _id: string;
  recommendedBy: IUser | string;
  recommendedTo: IUser | string;
  serviceProvider: IProviders | string;
}

export interface IComment {
  _id: string;
  createdBy: string | IUser;
  createdFor: string | IUser;
  description: string;
}

export interface IAddComment {
  description: string;
  to: string;
}
