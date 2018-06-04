import * as assert from 'power-assert';
import { CryptocurrencyConverter } from '../src/index';

const cc = new CryptocurrencyConverter();

const testConverter1 = async () => {
  const res = await cc.convert('BTC', 'BNB');
  console.log(res);
  assert(res);
};
const testConverter2 = async () => {
  const res = await cc.convert('BTC', 'USD');
  console.log(res);
  assert(res);
};
const testConverter3 = async () => {
  const res = await cc.convert('CND', 'BNB');
  console.log(res);
  assert(res);
};
const testConverter4 = async () => {
  const res = await cc.convert('bnb', 'btc');
  console.log(res);
  assert(res);
};

describe('test to CryptocurrencyConverter', () => {
  it('testConverter1', testConverter1);
  it('testConverter2', testConverter2);
  it('testConverter3', testConverter3);
  it('testConverter4', testConverter4);
});
