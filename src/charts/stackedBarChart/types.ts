export interface IStackBarChartProps {
  data: {
    label: string;
    count: number;
    category: string;
  }[];
  title: string;
  palatte: string;
  colorField?: 'label' | 'count';
  loading: boolean;
}
