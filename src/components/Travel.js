import React from "react";
import data from "./data";
import TravelCard from "./TravelCard";

function Travel() {
    const card = data.map((item) => {
        return <TravelCard
        key={item.id}
        {...item}
          />
    })   
    return (
       <div className="main">
        {card}
       </div>
    )
}

export default Travel;