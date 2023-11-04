import { EmojiProvider } from "./context/EmojiContext";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { Navbar } from "./components/Navbar/Navbar";
import ResponsiveAppBar from "./components/AppBar/ResponsiveAppBar";

const App = () => {
  return (
    <>
      <EmojiProvider>
        <ResponsiveAppBar />
        <AppRoutes />
      </EmojiProvider>
    </>
  );
};

export default App;
