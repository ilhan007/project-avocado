import React from 'react';
import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents/dist/DatePicker.js";
import "@ui5/webcomponents/dist/TextArea.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents-icons/dist/icons/search.js";
import "./Appreciate.css";
import searchedUsers from "./search/data/searchData.js";
import SearchList from './search/SearchList';

class Appreciate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
		};

		this.inpRef = React.createRef();
		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(event) {
		this.setState({
			users: [...this.filterUsersByInput(event.target.value)],
		});
	}

	filterUsersByInput(input) {
		if (!input) {
			return [];
		}

		input = input.toLowerCase();

		return searchedUsers.filter(user => {
			const firstname = user.firstname.toLowerCase();
			const lastname = user.lastname.toLowerCase();
			return firstname.startsWith(input) || lastname.startsWith(input);
		});
	}

	componentDidMount() {
		this.inpRef.current.removeEventListener("input", this.onSearch);
		this.inpRef.current.addEventListener("input", this.onSearch);
	}

	render() {
		return <div className="App-recognize">
			<ui5-rating-indicator></ui5-rating-indicator>
			<ui5-input
				class="App-recognize-search"
				placeholder="Appreciate someone's contribution"
				ref={this.inpRef}
			>
				<ui5-icon slot="icon" name="search" class="App-recognize-searchicon"></ui5-icon>
			</ui5-input>

			<SearchList users={this.state.users}/>

			<ui5-textarea placeholder="Leave a messag" show-exceeded-text maxlength="50"></ui5-textarea>
		</div>
	}
}

export default Appreciate;
