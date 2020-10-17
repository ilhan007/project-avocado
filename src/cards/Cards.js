import React from 'react';
import CardsList from "./CardsList.js";
import cardsData from "./data/cardsData.js";

class Cards extends React.Component {
	render() {
		return <div className="App-content">
			<CardsList cards={cardsData} onChangeHash={this.props.onChangeHash}/>
		</div>
	}
}

export default Cards;
