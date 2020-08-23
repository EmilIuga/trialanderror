import React from "react";
import Card from "terra-card/lib/Card";
import "./card.component.css";
import "../card/card.component.jsx";
const CardPadding = (props) => (
  <div>
    <Card>
      <Card.Body>
        <div className="card-list">
          {props.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </div>
      </Card.Body>
    </Card>
  </div>
);
export default CardPadding;
