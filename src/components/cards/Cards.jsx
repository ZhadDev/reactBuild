import React, { useEffect, useState } from "react";
import "./Cards.css";

export const Cards = ({
  cardHead = "300",
  cardBody = "GB de datos",
  cardFoot = "EN 2G/3G/4G/5G",
  cardColor = "#00bce5",
  title = "John Sanz",
}) => {
  const [fSizeCard, setfSizeCard] = useState("97px");

  useEffect(() => {
    const cHead = cardHead.length;
    if (cHead === 3) {
      setfSizeCard("86px");
    }

    if (cHead === 4) {
      setfSizeCard("62px");
    }

    if (cHead > 4) {
      setfSizeCard("36px");
    }
  }, [cardHead]);

  return (
    <div className="category">
      <div
        className="container-cards"
        style={{
          "--cardColor": `${cardColor}`,
          "--font-size-cards": `${fSizeCard}`,
        }}
      >
        <div className="card-head">
          <label className="labelhead"> {cardHead}</label>
        </div>
        <hr className="card-hr" />
        <div className="card-body"> {cardBody}</div>
        <div className="card-foot">{cardFoot}</div>
      </div>
      <label className="labelTittle">{title}</label>
    </div>
  );
};
