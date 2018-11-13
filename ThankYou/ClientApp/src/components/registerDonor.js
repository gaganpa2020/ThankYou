import React from 'react';

export class Popup extends React.Component {
	render() {
		return (
			<div className='popup'>
				<div className='popup_inner'>
					<button onClick={this.props.closePopup}>close me</button>
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
export default Popup;