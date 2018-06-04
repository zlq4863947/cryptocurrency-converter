import { Requester } from './requester';

export interface IResult {
  [coin: string]: number;
}

export class CryptocurrencyConverter {
  private requester: Requester;
  private baseUrl = 'https://min-api.cryptocompare.com/data';

  constructor() {
    this.requester = new Requester();
  }

  async convert(from: string, to: string): Promise<IResult> {
    const option = {
      fsym: from.toLocaleUpperCase(),
      tsyms: to.toLocaleUpperCase(),
    };
    return <IResult>await this.requester.send(this.baseUrl, '/price', option);
  }
}
