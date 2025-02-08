import React from "react";
import RowItem from "./RowItem";
export const itemData = [
  {
    sno: "01",
    text: "S&P 500 Index Falls 1.8% ; Led by  Communication Services Sector",
    bn: "BN",
    time: "12:00",
  },
  {
    sno: "02",
    text: "S&P 500 Index Falls 1.8% ; Led by  Communication Services Sector",
    bn: "BN",
    time: "12:00",
  },
  {
    sno: "03",
    text: "S&P 500 Index Falls 1.8% ; Led by  Communication Services Sector",
    bn: "BN",
    time: "12:00",
  },
  {
    sno: "04",
    text: "S&P 500 Index Falls 1.8% ; Led by  Communication Services Sector",
    bn: "BN",
    time: "12:00",
  },
];
const RankedNews = () => {
  return (
    <div className="">
      <div className="flex p-[20px]">
        <h2>Top Ranked News</h2>
        <hr/>
        <h2>More</h2>
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
