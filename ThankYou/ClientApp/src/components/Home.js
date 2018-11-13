import React, { Component } from 'react';
import './home.css';
import DonorPopup from './registerDonor';

export class Home extends Component {
	displayName = Home.name
	constructor() {
		super();
		this.state = {
			showPopup: false
		};
	}
	togglePopup() {
		this.setState({
			showPopup: !this.state.showPopup
		});
	}

	render() {
		return (
			<div align="center" className="donorButton">
				<button className="button" onClick={this.togglePopup.bind(this)}><span>Say, Thank You</span></button>
				{this.state.showPopup ?
					<DonorPopup closePopup={this.togglePopup.bind(this)} />
					: null
				}
			</div>
		);
	}
}
