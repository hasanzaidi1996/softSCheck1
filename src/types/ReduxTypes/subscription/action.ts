/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

export enum SubsciptionValidity {
  Yearly = 'yearly',
  Monthly = 'monthly',
  Infinite = 'infinite'
}

export enum Plugins {
  Logs = 'logs',
  Dashboard = 'dashboard',
  AppWhiteListing = 'app-whitelisting',
  PatchApp = 'patch-app',
  MsMacro = 'ms-macro',
  AppHardening = 'app-hardening',
  MFA = 'mfa',
  PatchOs = 'patch-os',
  RestrictPriviledges = 'restrict-priviledges',
  DailyBackup = 'daily-backup'
}

export interface ISubscription {
  _id?: string;
  price: number;
  name: string;
  uploadLimit: number;
  userCreationLimit: number;
  apiAccess: boolean;
  validity: SubsciptionValidity;
  plugins: Plugins[];
  features?: string[];
}

export interface IAddOn {
  name: string;
  price: number;
  description: string;
}
export interface IUserSubscription {
  subscriptionId?: string | ISubscription;
  clientId?: string;
  logSubmissions?: number;
  usersCreated?: number;
  apiKey?: string;
  addons?: IAddOn[];
  validity?: Date;
}
