import { useState } from "react";
import React from "react";
import CrossIcon from "../assets/icons/CrossIcon";
// import "./App.css";
import { X, Filter, Bell, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);



  return (
    <nav className="flex items-center bg-black text-white    ">
      <div className=" flex items-center">
        <div className="flex items-center bg-white px-2 py-1 w-full">
          <input
            type="text"
            placeholder="search"
            onChange={setSearchActive}
            className="bg-transparent focus:outline-none text-black flex-grow"
          />
          <button
            className="text-black ml-2"
            onClick={() => setSearchActive(false)}
          >
            {
              searchActive ?             <CrossIcon stroke={"black"} /> : "seach"
            }
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
