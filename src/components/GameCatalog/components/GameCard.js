import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonChoise from '../../buttons/ButtonChoise';
import './GameCard.scss';

class GameCard extends React.Component {
	render() {
		return (
			<div className={'game-card d-flex ' + this.props.bg}  >
				<div className="game-card-text" >
					<h4 className="page-title-min-reg game-card-title" >{this.props.title}</h4>
					<p className="page-subtitle-reg game-card-subtitle" >{this.props.subtitle}</p>
					<p className="page-subtitle-reg game-card-description" >{this.props.description}</p>
					<NavLink to={this.props.href}>
						<ButtonChoise 
							btnName={this.props.btnName} 
							text={this.props.text}
						/>
					</NavLink>
				</div>
				{this.props.children}
			</div>
		)
	}
};

export default GameCard; 