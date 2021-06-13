import React from 'react';
import './Card.scss';

class Card extends React.Component {
	render() {
		return (
			<div className="fcard d-flex flex-column justify-content-center align-items-center" >
				<div className="fcard-img-container d-flex justify-content-center align-items-center" >
					<img src={this.props.img} alt={this.props.alt} />
				</div>
				<p className="page-subtitle fcard-subtitle text-center" >{this.props.text}</p>
			</div>
		)
	}
};

export default Card;
