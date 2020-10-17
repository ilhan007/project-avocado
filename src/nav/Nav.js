import React from 'react';

import "@ui5/webcomponents/dist/Tab.js";
import "@ui5/webcomponents/dist/TabContainer.js";
import "@ui5/webcomponents-icons/dist/icons/grid.js";
import "@ui5/webcomponents-icons/dist/icons/competitor.js";
import "@ui5/webcomponents-icons/dist/icons/favorite.js";
import "@ui5/webcomponents-icons/dist/icons/education.js";
import "@ui5/webcomponents-icons/dist/icons/badge.js";

class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			paths: [
				{"/" : true},
				{"/appreciate": false},
				{"/recognitions": false},
				{"/ranking" : false},
				{"/learnmore": false},
			],
			selectedPath: "/",
		}
	
		this.navRef = React.createRef();
		this.onTabSelect = this.onTabSelect.bind(this);
		this.onHashCange = this.onHashCange.bind(this);
		this.currentPath = this.props.location.pathname;
	}

	onTabSelect(event) {
		const nextpPath = event.detail.tab.getAttribute("data-path");
		this.props.history.push(nextpPath);
	}

	onHashCange(event) {
		debugger;
		console.log(event.newURL);
	}

	componentDidMount() {
		this.navRef.current.removeEventListener("tab-select", this.onTabSelect);
		this.navRef.current.addEventListener("tab-select", this.onTabSelect);

		window.removeEventListener("hashchange", this.onHashCange);
		window.addEventListener("hashchange", this.onHashCange);
	}

	render() {
		return <ui5-tabcontainer
					ref={this.navRef}
					fixed
					show-overflow
					collapsed
				>
				<ui5-tab
					text="Home"
					selected={this.currentPath === "/" ? "true" : undefined}
					data-path="/"
					icon="grid"
				></ui5-tab>

				<ui5-tab
					text="Appreciate"
					icon="favorite"
					selected={this.currentPath === "/appreciate" ? "true" : undefined}
					data-path="/appreciate"
				></ui5-tab>

				<ui5-tab
					text="Recognitions"
					icon="badge"
					selected={this.currentPath === "/recognitions" ? "true" : undefined}
					data-path="/recognitions"
				></ui5-tab>

				<ui5-tab
					text="Ranking"
					icon="competitor"
					selected={this.currentPath === "/ranking" ? "true" : undefined}
					data-path="/ranking"
				></ui5-tab>

				<ui5-tab
					text="Learn more"
					icon="education"
					selected={this.currentPath === "/learnmore" ? "true" : undefined}
					data-path="/learnmore"
				></ui5-tab>
		</ui5-tabcontainer>
	}
}

export default Nav;
