import { useEmojiContext } from "../Context/EmojiContext";

const Emoji = (props) => {
  const { currentEmoji, updateEmoji } = useEmojiContext();

  const changeMood = () => {
    if (currentEmoji == "😁") {
      updateEmoji("🥺");
    } else if (currentEmoji == "🥺") {
      updateEmoji("😁");
    } else {
      updateEmoji("😁");
    }
  };

  return (
    <>
      <h1>Emojis!!</h1>
      <h1>{currentEmoji}</h1>
      <button onClick={changeMood}>Toggle Mood</button>
      <button onClick={() => updateEmoji("🤪")}>Press for: 🤪</button>
      <button onClick={() => updateEmoji("🐕")}>Press for: 🐕</button>
      <button onClick={() => updateEmoji("🌿")}>Press for: 🌿</button>
      <button onClick={() => updateEmoji("🤖")}>Press for: 🤖</button>
      {props.children}
    </>
  );
};

export default Emoji;
