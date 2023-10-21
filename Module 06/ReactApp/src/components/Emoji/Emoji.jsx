import { useState } from "react";

const Emoji = (props) => {
  const [emoji, setEmoji] = useState("😊");

  const changeMood = () => {
    if (emoji == "😁") {
      setEmoji("🥺");
    } else if (emoji == "🥺") {
      setEmoji("😁");
    } else {
      setEmoji("😁");
    }
  };

  return (
    <>
      <h1>Emojis!!</h1>
      <h1>{emoji}</h1>
      <button onClick={changeMood}>Toggle Mood</button>
      <button onClick={() => setEmoji("🤪")}>Press for: 🤪</button>
      <button onClick={() => setEmoji("🐕")}>Press for: 🐕</button>
      <button onClick={() => setEmoji("🌿")}>Press for: 🌿</button>
      <button onClick={() => setEmoji("🤖")}>Press for: 🤖</button>
    </>
  );
};

export default Emoji;
