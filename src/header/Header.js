import React from 'react';
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents/dist/Popover.js";
import "@ui5/webcomponents/dist/Select.js";
import "@ui5/webcomponents/dist/Switch.js";
import "@ui5/webcomponents/dist/Option.js";
import "@ui5/webcomponents-fiori/dist/ShellBar.js";
import "@ui5/webcomponents-icons/dist/icons/customer.js";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";

import "./Header.css";

const DEFAULT_THEME = "sap_fiori_3_dark";

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.sbRef = React.createRef();
		this.popupRef = React.createRef();
		this.selectThemeRef = React.createRef();
		this.selLangRef = React.createRef();
		this.switchRTL = React.createRef();

		this.onProfileClick = this.onProfileClick.bind(this);
		this.onThemeChange = this.onThemeChange.bind(this);
		this.onLangChange = this.onLangChange.bind(this);
		this.onRTLChange = this.onRTLChange.bind(this);

		setTheme(DEFAULT_THEME);
	}

	componentDidMount() {
		this.sbRef.current.removeEventListener("profileClick", this.onProfileClick);
		this.sbRef.current.addEventListener("profileClick", this.onProfileClick);

		this.selectThemeRef.current.removeEventListener("change", this.onThemeChange);
		this.selectThemeRef.current.addEventListener("change", this.onThemeChange);

		this.selLangRef.current.removeEventListener("change", this.onLangChange);
		this.selLangRef.current.addEventListener("change", this.onLangChange);

		this.switchRTL.current.removeEventListener("change", this.onRTLChange);
		this.switchRTL.current.addEventListener("change", this.onRTLChange);
	}

	onProfileClick(event) {
		this.popupRef.current.openBy(event.detail.targetRef);
	}

	onThemeChange(event) {
		setTheme(event.detail.selectedOption.getAttribute("data-theme"));
	}

	onLangChange(event) {
		setLanguage(event.detail.selectedOption.getAttribute("data-lang"));
	}

	onRTLChange(event) {
		this.props.changeRTL(event.target.checked);
	}

	render() {
		return <div>
			<ui5-shellbar
				primary-title="Appreciate"
				show-notifications
				notification-count="3"
				ref={this.sbRef}
			>
				<ui5-avatar slot="profile" icon="customer"></ui5-avatar>
			</ui5-shellbar>
			<ui5-popover class="App-profile" ref={this.popupRef} placementType="Bottom"
			header-text="Profile">

				<ui5-title class="App-profile-title" level="H5">Theme switch</ui5-title>
				<ui5-select ref={this.selectThemeRef}>
					<ui5-option data-theme="sap_fiori_3">Light</ui5-option>
					<ui5-option data-theme="sap_fiori_3_dark" selected>Dark</ui5-option>
					<ui5-option data-theme="sap_fiori_3_hcw">HCW</ui5-option>
					<ui5-option data-theme="sap_fiori_3_hcb">HCB</ui5-option>
				</ui5-select>

				<ui5-title class="App-profile-title" level="H5">Language switch</ui5-title>
				<ui5-select ref={this.selLangRef}>
					<ui5-option data-lang="en">EN</ui5-option>
					<ui5-option data-lang="de">DE</ui5-option>
					<ui5-option data-lang="bg">BG</ui5-option>
					<ui5-option data-lang="he">HE</ui5-option>
				</ui5-select>

				<ui5-title class="App-profile-title" level="H5">RTL</ui5-title>
				<ui5-switch ref={this.switchRTL}>RTL</ui5-switch>
			</ui5-popover>
		</div>
	}
}

export default Header;
