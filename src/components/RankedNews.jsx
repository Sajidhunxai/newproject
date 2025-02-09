import React from "react";
import RowItem from "./RowItem";
import MoreIcon from "../assets/icons/MoreIcon";
export const itemData = [
  {
    sno: "01)",
    text: "S&P 500 Index Falls 1.8% ; Led by  Communication Services Sector",
    bn: "BN",
    time: "12:00",
  },
  {
    sno: "02)",
    text: "S&P 500 Index Falls 1.8% ; Led by  Communication Services Sector",
    bn: "BN",
    time: "12:00",
  },
  {
    sno: "03)",
    text: "S&P 500 Index Falls 1.8% ; Led by  Communication Services Sector",
    bn: "BN",
    time: "12:00",
  },
  {
    sno: "04)",
    text: "S&P 500 Index Falls 1.8% ; Led by  Communication Services Sector",
    bn: "BN",
    time: "12:00",
  },
];
const RankedNews = () => {
  return (
    <div className="">
      <div className="flex items-center  bg-black text-white mt-[32px] mb-[57px] ">
        <h2 className="text-[20px] font-medium">Top Ranked News</h2>

        <div className="ml-[24px] mr-[12px] w-[2px] h-[30px] bg-[#747678]"></div>

        <div className="flex items-baseline text-[#747678] gap-[8px] cursor-pointer hover:text-white">
          <h2 className="text-[20px] font-medium">More</h2>
          <MoreIcon size={18} />
        </div>
      </div>
      {itemData.map((item, index) => (
        <RowItem
          key={index}
          sno={item.sno}
          text={item.text}
          bn={item.bn}
          time={item.time}
        />
      ))}
    </div>
  );
};
export default RankedNews;
