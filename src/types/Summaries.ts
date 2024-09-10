export interface Ticker {
  [key: string]: {
    name: string;
    last: number;
    vol_idr: number;
  };
}

export interface Price {
  [key: string]: number;
}

export interface Summary {
  tickers: Ticker;
  prices_24h: Price;
}
