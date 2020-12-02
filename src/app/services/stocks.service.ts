import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const stocks = ['IBM', 'GOOG', 'FB', 'AMZN'];
const service = 'https://angular2-in-action-api.herokuapp.com' as const;

export type Symbol = string;

export interface StockInterface {
  symbol: Symbol;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  constructor(private http: HttpClient) {}

  get() {
    return stocks.slice();
  }

  add(stock: string) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock: string) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: Symbol[]) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(
        service + '/stocks/snapshot?symbols=' + symbols.join()
      );
    }
  }
}
