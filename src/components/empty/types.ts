import { EmptyProps } from 'antd';

interface INoDataPlaceHolder extends EmptyProps {
  height?: number;
  width?: number;
  containerClassName?: string;
}
export interface IChartNoDataPlaceholderProps extends INoDataPlaceHolder {}
