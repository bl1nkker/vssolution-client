import React from 'react';
import Circle from '../Decor/Circle';
import Cross from '../Decor/Cross';
import Decor from '../Decor/Decor';
import Square from '../Decor/Square';
import Triangle from '../Decor/Triangle';
import Card from './Card';
import './Features.scss';

class Features extends React.Component {
	render() {
		return (
			<div className="features-container container-fluid pb-5" >
				<Decor blockClass="features">
					<Square figure="square-features"/>
					<Triangle figure="triangle-features"/>
					<Circle figure="circle-features"/>
					<Cross figure="cross-features"/>
				</Decor>
				<div className="d-flex justify-content-center" >
					<h3 className="page-title-min text-center features-title" >Наши преимущества</h3>
				</div>
				<div className="container d-flex justify-content-between pt-4" >
					<Card 
						img="images/pics/cards/shield.png" 
						alt="Safety"
						text="Самые продвинутые и надежные алгоритмы безопасности"	
					/>
					<Card 
						img="images/pics/cards/rocket.png" 
						alt="Speed"
						text="Быстрая обработка заказа и приобретение ваших игровых ценностей"	
					/>
					<Card 
						img="images/pics/cards/coin.png" 
						alt="Profit"
						text="Самые выгодные цены на рынке продажи игровых ценностей"	
					/>
				</div>
			</div>
		)
	}
}

export default Features;