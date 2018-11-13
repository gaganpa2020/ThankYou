import React, { Component } from 'react';
import './home.css';
import DonorPopup from './registerDonor';

export class Home extends Component {
	displayName = Home.name

	togglePopup = function () {
		alert('click me done.');
	} 

	render() {
		return (
			<div align="center" className="donorButton">
				<button class="button" onClick={this.togglePopup}>
					<span>Say, Thank You</span></button>
				
			</div>
		);
	}
}
