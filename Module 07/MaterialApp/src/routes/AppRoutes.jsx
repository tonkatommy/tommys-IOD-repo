import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { LoginPage } from "../pages/LoginPage";

export const AppRoutes = (props) => {
  return (
    <>
      <Routes>
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
      </Routes>
    </>
  );
};
