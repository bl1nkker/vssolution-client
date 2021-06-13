import React from 'react';
import './Decor.scss';

class Circle extends React.Component {
	render() {
		return(
			<div className={this.props.figure}></div>
		)
	}
};

export default Circle;
