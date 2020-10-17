import React from 'react';
import "@ui5/webcomponents/dist/List.js";
import "@ui5/webcomponents/dist/StandardListItem.js";

const SearchListItem = props =>
<ui5-li
	description={`${props.user.country}, ${props.user.city}`}
	image={props.user.image}
	info={`${props.user.department}, ${props.user.job}`}
	info-state="Information"
>
	{`${props.user.firstname} ${props.user.lastname}`}
</ui5-li>

const SearchList = props =>
<ui5-list no-data-text="Nobody found">
	{props.users.map((user, index) => <SearchListItem key={index} user={user}/>)}
</ui5-list>

export default SearchList;
