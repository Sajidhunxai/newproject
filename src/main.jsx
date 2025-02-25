import React from "react"; // ✅ Import React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./components/Navbar.jsx";
import RowItem from "./components/RowItem.jsx";
import OrderedNews from "./components/OrderedNews.jsx";
import RankedNews from "./components/RankedNews.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-black min-h-screen px-[66px] text-white">
      <Nav />
      <RankedNews />
      <OrderedNews />
    </div>
  </StrictMode>
);
