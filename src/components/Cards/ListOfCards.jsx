import React from "react";
import Cards from "./Cards";
import "./cards.css";

function ListOfCards({ list }) {
  return (
    <div className="cards-flex">
      {list.map((card, i) => (
        <Cards card={card} key={i} />
      ))}
    </div>
  );
}

export default ListOfCards;
