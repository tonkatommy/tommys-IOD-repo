import Greeting from "./components/Greeting.jsx";

function App() {
  return (
    <>
      <Greeting name="Tommy" />
      <Greeting />
      <Greeting name="Franklin">
        <p>What shall we do today?</p>
      </Greeting>
    </>
  );
}

export default App;
