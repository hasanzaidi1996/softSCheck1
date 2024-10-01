export interface IPieChartProps {
  data: {
    type: string;
    value: number;
  }[];
  title: string;
  palatte: string;
  loading: boolean;
}
