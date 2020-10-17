import React from 'react';
import Card from "./Card.js";

const Cards = props =>
<section className="App-content">
	{props.cards.map((card, index) => <Card props={props} key={index} card={card} onChangeHash={props.onChangeHash}/>)}
</section>

export default Cards;
