import { ColumnConfig } from '@ant-design/plots';

export type IColumnChartProps = ColumnConfig & {
  title: string;
  palatte?: string;
  loading: boolean;
};
