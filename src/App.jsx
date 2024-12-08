

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" exact />
        <Route element={<LoginPage />} path="/LoginPage" />
        <Route element={<ProfilePage />} path="/ProfilePage" />
        <Route element={<RegistrationPage />} path="/RegistrationPage" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
