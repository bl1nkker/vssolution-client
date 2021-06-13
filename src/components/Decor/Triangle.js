import React from 'react';
import './Decor.scss';

class Triangle extends React.Component {
	render() {
		return(
			<div className={this.props.figure} >
				<div className={this.props.figure + "-elem"} ></div>
			</div>
		)
	}
};

export default Triangle;