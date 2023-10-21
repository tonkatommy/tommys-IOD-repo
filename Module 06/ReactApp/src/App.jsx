import "./App.css";

import Greeting from "./components/Greeting/Greeting.jsx";
import BigCats from "./components/BigCats/BigCats.jsx";
import Emoji from "./components/Emoji/Emoji.jsx";
import { Calculator } from "./components/Calculator/Calculator";

function App() {
  return (
    <>
      {/* Greeting with props passed */}
      <Greeting name="Tommy" />
      {/* Greeting with no props */}
      <Greeting />
      {/* Greeting with props and children */}
      <Greeting name="Franklin">
        <p>What shall we do today?</p>
      </Greeting>
      {/* Emoji component */}
      <Emoji></Emoji>
      {/* BigCats component */}
      <BigCats></BigCats>
      <Calculator></Calculator>
    </>
  );
}

export default App;
