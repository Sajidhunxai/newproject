import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CrossIcon from "./assets/icons/CrossIcon";
import "./App.css";
import { X, Filter, Bell, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <nav className="flex items-center bg-black text-white px-4 py-2">
      <div className="relative flex items-center">
        {searchActive ? (
          <div className="flex items-center bg-orange-500 border border-blue-500 rounded-md px-2 py-1 w-[250px]">
            <input
              type="text"
              placeholder="Bloomberg Auto Intelli..."
              className="bg-transparent focus:outline-none text-black flex-grow"
            />
            <button
              className="text-white ml-2"
              onClick={() => setSearchActive(false)}
            >
              <CrossIcon />
            </button>
          </div>
        ) : (
          <button
            className="bg-gray-800 px-3 py-1 rounded-md"
            onClick={() => setSearchActive(true)}
          >
            🔍
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
