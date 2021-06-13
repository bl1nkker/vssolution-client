import React from 'react';
import Circle from '../Decor/Circle';
import Cross from '../Decor/Cross';
import Decor from '../Decor/Decor';
import Square from '../Decor/Square';
import Triangle from '../Decor/Triangle';
import './Footer.scss';

export default class Footer extends React.Component {
	render() {
		return(
			<footer className="container-fluid d-flex footer flex-column" >
				<Decor blockClass="footer">
					<Cross figure="cross-footer"/>
					<Square figure="square-footer"/>
					<Triangle figure="triangle-footer"/>
					<Circle figure="circle-footer" />
				</Decor>
				<h3 className="page-title" >VSSOLUTION</h3>
				<a href="mailto:Vssol@gmail.com" className="page-subtitle">Vssol@gmail.com</a>
			</footer>
		)
	}
};