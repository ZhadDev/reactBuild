import React from "react";
import "./Example.css";
import "./Planes.css";
import { Cards } from "../../components/cards/Cards";

const Example = () => {
  const data = {
    cardHead: "10000",
    cardBody: "MB Navegación",
    cardFoot: "1 Punto router",
    cardColor: "green",
    title: "Internet",
  };
  const cards = [
    data,
    {
      cardHead: "1262",
      cardBody: "Canales",
      cardFoot: "72 Canales en HD",
      cardColor: "red",
      title: "Televisión",
    },
    {
      cardHead: "Ilimitada",
      cardBody: "Local",
      cardFoot: "60 minutos a USA",
      cardColor: "blue",
      title: "Telefonía",
    },
    data,
    {
      cardHead: "1262",
      cardBody: "Canales",
      cardFoot: "72 Canales en HD",
      cardColor: "red",
      title: "Televisión",
    },
    {
      cardHead: "Ilimitada",
      cardBody: "Local",
      cardFoot: "60 minutos a USA",
      cardColor: "blue",
      title: "Telefonía",
    },
  ];

  return (
    <div className="cardsPlan">
      <div className="namePlan"></div>
      <div className="pricePlan"></div>
      <div className="servicePlan"></div>
      <div className="servicePlanB"></div>
      <div className="listCard">
        {cards.map((item) => (
          <Cards
            cardHead={item.cardHead}
            cardBody={item.cardBody}
            cardFoot={item.cardFoot}
            cardColor={item.cardColor}
            title={item.title}
          />
        ))}
      </div>
      <div className="includes"></div>
    </div>
  );
};

export default Example;

/*
  <div className="container-example">
      <div className="a"></div>
      <div className="b"></div>
      <div className="c"></div>
      <div className="d"></div>
      <div className="e"></div>
    </div>
*/
