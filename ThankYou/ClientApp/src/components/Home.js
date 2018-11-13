import React from 'react';
import { connect } from 'react-redux';
import './home.css';
import DonorPopup from './registerDonor';

const Home = props => (
	<div align="center" className="donorButton">
		<button class="button" ><span>Say, Thank You</span></button>
	</div>
);


export default connect()(Home);
