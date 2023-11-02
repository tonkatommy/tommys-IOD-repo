import { useState } from "react";
import { EmojiProvider } from "./context/EmojiContext";
import { BitcoinRates } from "./components/Bitcoin/BitcoinRates";
import Emoji from "./components/Emoji/Emoji";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EmojiProvider>
        <Emoji></Emoji>
        <BitcoinRates></BitcoinRates>
      </EmojiProvider>
    </>
  );
}

export default App;
