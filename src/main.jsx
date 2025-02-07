import React from "react"; // ✅ Import React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./Navbar.jsx";
// import Navbar from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
  </StrictMode>
);
