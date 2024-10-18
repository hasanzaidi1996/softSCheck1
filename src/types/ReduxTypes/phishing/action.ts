export interface IAddPhishing {
  ids: string[];
}
export interface ITriggerPhishing {
  id: string;
}
export interface IPhishing {
  _id: string;
  user: string;
  createdBy: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
