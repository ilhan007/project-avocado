import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Header from "./header/Header.js";
import Nav from "./nav/Nav.js"
import Appreciate from "./appreciate/Appreciate.js"
import Ranking from "./ranking/Ranking.js"
import Cards from "./cards/Cards.js";
import LearnMore from "./learnmore/LearnMore.js";
import Recognitions from "./recognitions/Recognitions";

import "@ui5/webcomponents-fiori/dist/Assets.js"
import applyDirection from "@ui5/webcomponents-base/dist/locale/applyDirection.js";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			rtl: false,
			paths: [
				{"/" : true},
				{"/appreciate": false},
				{"/recognitions": false},
				{"/ranking" : false},
				{"/learnmore": false},
			]
		}

		this.changeRTL = this.changeRTL.bind(this);
		this.onChangeHash = this.onChangeHash.bind(this);
	}

	changeRTL(isRTL) {
		this.setState({
			rtl: isRTL,
		});

		applyDirection();
	}

	onChangeHash() {
		this.forceUpdate();
	}

	get direction() {
		return this.state.rtl ? "rtl" : "ltr"
	}
	
	render() {
		return <div className="App" dir={this.direction}>
			<Header changeRTL={this.changeRTL} />

			<BrowserRouter>
				<Route
					path="/"
					component={Nav}
				/>
				<Switch>
					<Route 
						exact
						path="/"
						render={() => <Cards onChangeHash={this.onChangeHash}/>}
					/>
					<Route 
						exact 
						path="/appreciate"
						component={Appreciate}
					/>
					<Route 
						exact 
						path="/recognitions"
						component={Recognitions}
					/>
					<Route 
						exact 
						path="/ranking"
						component={Ranking}
					/>
					<Route 
						exact 
						path="/learnmore"
						component={LearnMore}
					/>
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</div>
	}
}

export default App;
