import { Time } from 'lightweight-charts';

export interface ChartDataPoint {
  time: number | Time;
  value: number;
}