import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Portfolio from "./Portfolio";
import RedirectPage from "./RedirectPage";  // new component to handle slug redirects
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/:slug" element={<RedirectPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
