import React from 'react';
import "@ui5/webcomponents/dist/List.js";
import "@ui5/webcomponents/dist/StandardListItem.js";
import "@ui5/webcomponents-icons/dist/icons/employee.js";
import "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";

const compare = (a, b) => {
	if ( a.recognized > b.recognized ){
		return -1;
	}
	if ( a.recognized < b.recognized ){
		return 1;
	}
	return 0;
}

const RankingListItem = props =>
<ui5-li
	image={props.rankedUser.image}
	info={`${props.rankedUser.country}`}
	info-state="Information"
	description={`${props.rankedUser.department}, ${props.rankedUser.job}`}
>
	{`(${props.rankedUser.recognized}) ${props.rankedUser.firstname} ${props.rankedUser.lastname}`}
</ui5-li>

const RankingList = props =>
<ui5-flexible-column-layout layout="TwoColumnsMidExpanded">

	<ui5-list header-text="Ranking" slot="startColumn">
		{props.rankedUsers
			.sort(compare)
			.slice(0, 10)
			.map((rankedUser, index) => <RankingListItem key={index} rankedUser={rankedUser}/>)
		}
	</ui5-list>

	<div slot="midColumn">hello</div>
</ui5-flexible-column-layout>


export default RankingList;
