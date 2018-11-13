import React from 'react';
import { connect } from 'react-redux';

class Popup extends React.Component {
	render() {
		return (
			<div className='popup'>
				<div className='popup_inner'>
					//Show field to register a donor.
					Name: <input type="text" />
					Name: <input type="text" />
					Name: <input type="text" />
					Name: <input type="text" />
					<button type="submit" />
				</div>
			</div>
		);
	}
}
export default connect()(Popup);