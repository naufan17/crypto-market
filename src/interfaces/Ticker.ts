export interface Ticker {
  last: number;
  vol_idr: number;
}

export interface TickerData {
  ticker: Ticker
}