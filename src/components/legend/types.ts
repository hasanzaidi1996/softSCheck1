export interface ILegend {
  color: string;
  label: string;
}

export interface ILegendProps {
  legends: ILegend[];
  type?: string;
  marginTop?: string;
  marginBottom?: string;
  width?: number;
  height?: number;
}
