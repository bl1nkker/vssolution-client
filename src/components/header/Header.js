import React from 'react';
import Decor from '../Decor/Decor';
import Triangle from '../Decor/Triangle';
import Cross from '../Decor/Cross';
import Square from '../Decor/Square';
import Circle from '../Decor/Circle';
import './Header.scss';
import Offer from './Offer';


class Header extends React.Component {
	render() {
		return (
			<div className={"header-container header-bg header-bg-" + this.props.page}>
				<Offer 
					offer={this.props.offer} 
					btnText={this.props.btnText}
					btnHref={this.props.btnHref}
				>
					<div className="d-flex">
						{this.props.children}
					</div>
				</Offer>
				<Decor blockClass={this.props.blockClass}>
					<Cross figure={"cross-" + this.props.blockClass} />
					<Square figure={"square-" + this.props.blockClass} />
					<Triangle figure={"triangle-" + this.props.blockClass} />
					<Circle figure={"circle-" + this.props.blockClass} />
				</Decor>
				<img src={this.props.img} alt="Hero" className={"hero-image hero-image-" + this.props.page} />
			</div>
		)
	}
}

export default Header;