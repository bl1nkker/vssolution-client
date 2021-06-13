import React from 'react';

export default class Message extends React.Component {
	render() {
		if (this.props.visible) {
			return (
				<div class="alert alert-danger" role="alert">
					{this.props.message}
				</div>
			)
		}
		return (
			<></>
		)
	}
}