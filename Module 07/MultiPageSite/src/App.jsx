import { EmojiProvider } from "./context/EmojiContext";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { Navbar } from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <EmojiProvider>
        <Navbar />
        <AppRoutes />
      </EmojiProvider>
    </>
  );
};

export default App;
