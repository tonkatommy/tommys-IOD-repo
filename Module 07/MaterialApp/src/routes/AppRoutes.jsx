import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { LoginPage } from "../pages/LoginPage";
import { BitcoinPage } from "../pages/BitcoinPage";

export const AppRoutes = (props) => {
    return (
        <>
            <Routes>
                {/* Index route to HomePage triggers page reload */}
                <Route
                    index
                    element={<HomePage />}
                />
                {/* Home route to HomePage - won't trigger reload */}
                <Route
                    path="/home"
                    element={<HomePage />}
                />
                {/* About route to AboutPage - won't trigger reload */}
                <Route
                    path="/about"
                    element={<AboutPage />}
                />
                {/* Bitcoin Rates route to BitcoinPage */}
                <Route
                    path="/bitcoin"
                    element={<BitcoinPage />}
                />
                {/* Login route to LoginPage Route */}
                <Route
                    path="/login"
                    element={<LoginPage />}
                />
            </Routes>
        </>
    );
};
