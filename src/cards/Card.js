import React from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import "@ui5/webcomponents/dist/Card.js";
import "@ui5/webcomponents/dist/RatingIndicator.js";
import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/icons/badge.js";
import "@ui5/webcomponents-icons/dist/icons/competitor.js";
import "@ui5/webcomponents-icons/dist/icons/education.js";
import "@ui5/webcomponents-icons/dist/icons/favorite.js";
import "@ui5/webcomponents-icons/dist/icons/menu2.js";
import "@ui5/webcomponents-icons/dist/icons/paper-plane.js";

import "./Card.css"
class Card extends React.Component {
	constructor(props) {
		super(props);

		this.cardRef = React.createRef();
		this.onCardClick = this.onCardClick.bind(this);
	}

	onCardClick(e) {
		const nextpPath = e.target.getAttribute("data-path") || "/";
		this.props.history.push(nextpPath);
		this.props.onChangeHash();
	}

	componentDidMount() {
		this.cardRef.current.removeEventListener("header-click", this.onCardClick);
		this.cardRef.current.addEventListener("header-click", this.onCardClick);
	}

	render() {
		return <ui5-card
					heading={this.props.card.heading}
					header-interactive
					subheading={this.props.card.subheading}
					ref={this.cardRef}
					key={this.props.card.key}
					data-path={this.props.card.path}
				>
					<ui5-icon class="App-card-icon" name={this.props.card.icon} slot="action"></ui5-icon>
				</ui5-card>
	}

	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	};
}

export default withRouter(Card);
