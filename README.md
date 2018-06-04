# cryptocurrency-converter

Calculator tool to convert between any two cryptocurrencies

## Install

```
npm install cryptocurrency-converter

```

## Usage

```
import { CryptocurrencyConverter } from 'cryptocurrency-converter';

(async function test() {
  const cc = new CryptocurrencyConverter();
  const res = await cc.convert('BTC', 'BNB');
  console.log(res);
  // output: { BNB: 542.3 }
})();

```

OR

```
import { CryptocurrencyConverter } from 'cryptocurrency-converter';

const cc = new CryptocurrencyConverter();
const res = await cc.convert('BTC', 'BNB');
console.log(res);
// output: { BNB: 542.3 }

```
