import { IReportState } from 'types/ReduxTypes/report';

export interface IReportTableProps {
  data: IReportState['reports'];
  loading: boolean;
}
