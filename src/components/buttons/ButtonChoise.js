import React from 'react';
import './Buttons.scss';

class ButtonChoise extends React.Component {
	render() {
		return (
			<>
				<a href={this.props.href}>
					<div className={"font-button-24 d-flex justify-content-center align-items-center button-" + this.props.btnName}>
						<p>{this.props.text}</p>
					</div>
				</a>
			</>
		)
	}
}

export default ButtonChoise;