import { ReportStatus } from 'types';

export interface IReport {
  name: string;
  status: ReportStatus;
  createdAt: string;
  updatedAt: string;
  _id: string;
}

export interface CountObject {
  _id: string;
  count: number;
}

export interface IReportState {
  selectedReportId: string | null;
  reports: IReport[] | null;
  reportsLoading: boolean;
  whitelistedCount: CountObject[] | null;
  whitelistedCountLoading: boolean;
  criticalityCount: CountObject[] | null;
  criticalityCountLoading: boolean;
  maturityLevel: CountObject[] | null;
  maturityLevelLoading: boolean;
}
