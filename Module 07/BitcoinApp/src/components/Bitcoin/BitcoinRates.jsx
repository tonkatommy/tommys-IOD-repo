import { useEffect, useState } from "react";
import axios from "axios";

// array of currencies strings
const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
// api key for coin gecko
const apiKey = "x_cg_api_key=CG-eyxFRpVeDXmXAomLnpBmhUG5";

// component function
export function BitcoinRates() {
  // useState used for tracking which currency is selected
  const [currency, setCurrency] = useState(currencies[0]);
  // useState used for tracking the BTC value
  const [btcValue, setBtcValue] = useState(0);

  // the fetch url
  const btcUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}&${apiKey}`;

  // useEffect used to handle the fetching of data
  useEffect(() => {
    console.log("running effect");
    let ignore = false;

    axios
      .get(btcUrl)
      .then((json) => {
        if (!ignore) setBtcValue(json.data.bitcoin[currency.toLowerCase()]);
      })
      .catch((err) => console.log(err));

    // fetch(btcUrl)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     !ignore ? setBtcValue(json.bitcoin[currency.toLowerCase()]) : null;
    //   });

    return () => {
      ignore = true;
      console.log("clean up effect");
    };
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <h3>${btcValue}</h3>
    </div>
  );
}
