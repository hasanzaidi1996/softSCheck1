export interface ILineChartProps {
  data: {
    xAxis: string;
    yAxis: number;
  }[];
  title: string;
  palatte: string;
  loading: boolean;
}
