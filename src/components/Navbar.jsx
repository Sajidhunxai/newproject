import { useState } from "react";
import React from "react";
import CrossIcon from "../assets/icons/CrossIcon";
import Button from "./Buttons";
import DateIcon from "../assets/icons/DateIcon";
import SourcesIcon from "../assets/icons/SourcesIcon";
import TimeIcon from "../assets/icons/TimeIcon";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <nav className="flex items-center justify-center bg-black text-white gap-[33px] pt-[22px]">
      {/* Search Bar */}
      <div className="flex items-center bg-[#F39320] max-w-[689px] w-full text-white px-2 py-[6.25px] ">
        <input
          type="text"
          placeholder="Search"
          onChange={setSearchActive}
          className="bg-transparent focus:outline-none text-white text-[16px] font-medium flex-grow"
        />
        <button
          className="text-black cursor-pointer"
          onClick={() => setSearchActive(false)}
        >
          {searchActive ? <CrossIcon stroke={"black"} /> : "Search"}
        </button>
      </div>

      {/* Buttons */}
      <div className="flex gap-[60px]">
        <Button text="Sources" icon={SourcesIcon} />
        <Button text="All Dates" icon={DateIcon} />
        <Button text="Time" icon={TimeIcon} />
      </div>
    </nav>
  );
};

export default Navbar;
