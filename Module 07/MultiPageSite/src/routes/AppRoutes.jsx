import { Route, Routes } from "react-router-dom";

const AppRoutes = (props) => {
  return (
    <>
      <Routes>
        <Route
          index
          element={<HomePage {...props} />}
        />
      </Routes>
    </>
  );
};
