import React from 'react';

export default class Upload extends React.Component {
	render() {
		return(
			<label className="page-title-label pb-5">
				{this.props.title}
				{this.props.children}
			</label>
		)
	};
};