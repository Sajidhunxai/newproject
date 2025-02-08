import React from "react";
const  RowItem = (({key, sno, text, bn, time}) => {



    return <div className="flex sajid " key={key}>
        <p className="w-1/4">
            {sno}
        </p>
        <p className="w-full">
         {text}
        </p>
        <p className="w-full">
            {bn}
        </p>
        <p>{time}</p>
    </div>




});
export default RowItem;