import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BitcoinRates } from "./components/Bitcoin/BitcoinRates";
import { EmojiProvider } from "./components/Context/EmojiContext";
import Emoji from "./components/Emoji/Emoji";

function App() {
  return (
    <>
      <EmojiProvider>
        <Emoji></Emoji>
        <h1>Bitcoin Rates:</h1>
        <BitcoinRates></BitcoinRates>
      </EmojiProvider>
    </>
  );
}

export default App;
