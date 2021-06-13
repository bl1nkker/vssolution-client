import React from 'react';

class Decor extends React.Component {
	render() {
		return(
			<div className={"decor-" + this.props.blockClass}>
				{this.props.children}
			</div>
		)
	}
};

export default Decor;