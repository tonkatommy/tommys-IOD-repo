import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ComplexComment from "./ComplexComment";
import { FullName } from "./FullName";

function App() {
  // object storing comment data - passed as props
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      // author is also an object
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <>
      {/* render the component, passing object data as props */}
      <ComplexComment author={comment.author} date={comment.date} text={comment.text} />
      <FullName first="Tommy" last="Tonka"></FullName>
    </>
  );
}

export default App;
