import { useEmojiContext } from "../../context/EmojiContext";
import "./Emoji.css";

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
      <div className="emoji-selector">
        <h1>Emoji Selector</h1>
        <h2>Current Emoji:</h2>
        <h1>{currentEmoji}</h1>
        <button
          className="btnEmoji"
          onClick={changeMood}>
          Toggle Mood
        </button>
        <button
          className="btnEmoji"
          onClick={() => updateEmoji("🤪")}>
          Press for: 🤪
        </button>
        <button
          className="btnEmoji"
          onClick={() => updateEmoji("🐕")}>
          Press for: 🐕
        </button>
        <button
          className="btnEmoji"
          onClick={() => updateEmoji("🌿")}>
          Press for: 🌿
        </button>
        <button
          className="btnEmoji"
          onClick={() => updateEmoji("🤖")}>
          Press for: 🤖
        </button>
        {props.children}
      </div>
    </>
  );
};

export default Emoji;
