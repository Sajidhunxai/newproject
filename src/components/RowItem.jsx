import React from "react";
const RowItem = ({ key, sno, text, bn, time }) => {
  return (
    <div className="flex sajid text-[20px] font-medium mb-[12px] " key={key}>
      <p className="mr-[7px]">{sno}</p>
      <p className={`w-[85%]  `}>{text}</p>
      <div className="w-[15%] flex justify-between">
        <p className="">{bn}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};
export default RowItem;
