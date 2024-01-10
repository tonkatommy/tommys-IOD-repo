import { useState } from "react";
import { useGetData } from "../hooks/useGetData";
import { useEmojiContext } from "../context/EmojiContext";

// array of currencies strings
const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
// api key for coin gecko
const apiKey = "x_cg_api_key=CG-eyxFRpVeDXmXAomLnpBmhUG5";

// component function
export const BitcoinPage = () => {
    // useState used for tracking which currency is selected
    const [currency, setCurrency] = useState(currencies[0]);
    // Context for Emoji
    const { currentEmoji, updateEmoji } = useEmojiContext();

    // the fetch url
    const coinGeckoUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}&${apiKey}`;

    const btcValue = useGetData(coinGeckoUrl);

    const options = currencies.map((curr) => (
        <option
            value={curr}
            key={curr}>
            {curr}
        </option>
    ));

    return (
        <div className="bitcoin-rate-selector">
            <h1>Bitcoin Rate Selector</h1>
            <h2>Bitcoin Exchange Rate</h2>
            <p>Choose currency:</p>
            <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}>
                {options}
            </select>

            <h3>
                $
                {btcValue
                    ? btcValue.bitcoin[currency.toLowerCase()]
                    : "...loading"}
            </h3>
            <h3>Todays Emoji: {currentEmoji}</h3>
        </div>
    );
};
