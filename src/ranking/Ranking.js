import React from 'react';
import RankingList from "./RankingList.js";
import rankingData from "./data/rankingData.js";
import "./Ranking.css";

class Ranking extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			page: 1,
		}
	}

	render() {
		return <div className="App-ranking">
			<RankingList rankedUsers={rankingData}/>
		</div>
	}

	componentDidMount() {
		this.setState({
			loaded: true,
		});
	}
}

export default Ranking;
