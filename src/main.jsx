import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./css/main.scss";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLayout } from "@/layouts/User";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserLayout />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
