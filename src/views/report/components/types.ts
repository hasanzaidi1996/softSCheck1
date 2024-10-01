import { IReportState } from 'types/ReduxTypes/report';

export interface IReportTableProps {
  data: IReportState['reports'];
  loading: boolean;
}

export interface IUploadModalProps {
  open: boolean;
  setOpen(value: boolean): void;
}
