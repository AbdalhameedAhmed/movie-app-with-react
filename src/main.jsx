import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home/index.jsx";
import MainLayout from "./components/layouts/Main.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
