import React from 'react';
import './TextInput.scss';

export default class SocialSubtitle extends React.Component {
	render() {
		return(
			<div className="page-subtitle-social">{this.props.text}</div>
		)
	};
};