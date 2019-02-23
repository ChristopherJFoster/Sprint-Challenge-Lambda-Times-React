// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {cards.map((card, index) => (
        <Card key={Date.now() + index} card={card} />
      ))}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Cards;
