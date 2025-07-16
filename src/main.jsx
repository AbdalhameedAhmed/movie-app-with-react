import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home/index.jsx";
import MainLayout from "./components/layouts/Main.jsx";
import Details from "./pages/Details/index.jsx";
import WatchLater from "./pages/WatchLater/index.jsx";
import Login from "./pages/Login/index.jsx";
import Register from "./pages/Register/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="details/:movieId" element={<Details />} />
          <Route path="watchlater" element={<WatchLater />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
