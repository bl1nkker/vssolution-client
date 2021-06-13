import React from 'react';
import './Header.scss';
import Decor from '../Decor/Decor';
import Triangle from '../Decor/Triangle';

class Offer extends React.Component {
	render() {
		return(
			<div className="offer container">
				<Decor blockClass="decor" >
					<Triangle figure="triangle-offer-main" />
					
					<Triangle figure="triangle-offer-main" />
					<Triangle figure="triangle-offer-main" />
				</Decor>
				<div className="header-offer d-flex flex-column align-items-start">
					<h1 className="page-title pb-5">{this.props.offer}</h1>
					<p className="page-subtitle pb-5 header-offer-subtitle">Покупка и продажа от реальных игроков с системой защиты от мошенничества</p>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Offer;