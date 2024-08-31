export interface IBarChartProps {
  data: {
    label: string;
    count: number;
  }[];
  title: string;
  palatte: string;
  colorField?: 'label' | 'count';
  loading: boolean;
}
