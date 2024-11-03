export interface ICandleData {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

export type IntervalKey = '5M' | '15M' | '1H' | '4H' | '1D' | '1W' | '1M';
export type ICandleStick = Record<IntervalKey, ICandleData[]>;
