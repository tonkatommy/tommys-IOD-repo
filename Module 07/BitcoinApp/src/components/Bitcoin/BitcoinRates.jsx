import { useState } from "react";
import { useGetData } from "../hooks/useGetData";
import { useEmojiContext } from "../Context/EmojiContext";

// array of currencies strings
const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
// api key for coin gecko
const apiKey = "x_cg_api_key=CG-eyxFRpVeDXmXAomLnpBmhUG5";

// component function
export function BitcoinRates() {
  // useState used for tracking which currency is selected
  const [currency, setCurrency] = useState(currencies[0]);
  // useState used for tracking the BTC value
  // const [btcValue, setBtcValue] = useState(0);
  const { currentEmoji, updateEmoji } = useEmojiContext();

  // the fetch url
  const coinGeckoUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}&${apiKey}`;

  const btcValue = useGetData(coinGeckoUrl);
  // console.log(btcValue);

  // useEffect used to handle the fetching of data
  // useEffect(() => {
  //   console.log("running effect");
  //   let ignore = false;

  //   // axios to get the json data from the url
  //   axios
  //     .get(coinGeckoUrl)
  //     .then((json) => {
  //       !ignore ? setBtcValue(json.data.bitcoin[currency.toLowerCase()]) : null;
  //     })
  //     .catch((err) => console.log(err));

  //   return () => {
  //     ignore = true;
  //     console.log("clean up effect");
  //   };
  // }, [currency]);

  const options = currencies.map((curr) => (
    <option
      value={curr}
      key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h2>Bitcoin Exchange Rate</h2>
      <label>
        Choose currency:
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <h3>${btcValue ? btcValue.bitcoin[currency.toLowerCase()] : 0}</h3>
      <h3>Todays mood: ${currentEmoji}</h3>
    </div>
  );
}
