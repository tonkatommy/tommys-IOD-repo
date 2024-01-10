import { createContext, useContext, useState } from "react";

const EmojiContext = createContext();

export const EmojiProvider = (props) => {
    const [currentEmoji, setEmoji] = useState("😊");

    const updateEmoji = (emoji) => {
        setEmoji(emoji);
    };

    return (
        <EmojiContext.Provider value={{ currentEmoji, updateEmoji }}>
            {props.children}
        </EmojiContext.Provider>
    );
};

export const useEmojiContext = () => {
    return useContext(EmojiContext);
};
