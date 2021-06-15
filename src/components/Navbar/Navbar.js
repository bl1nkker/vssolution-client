import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.scss';
import Decor from '../Decor/Decor';
import Circle from '../Decor/Circle';
import Triangle from '../Decor/Triangle';
import Cross from '../Decor/Cross';
import { AuthContext } from '../../context/AuthContext';


export default function Navibar (){
	const {logout, isLogin} = useContext(AuthContext);

	return(
			<>
				<header className="d-flex container-sm align-items-center header-brand">
					<Decor blockClass="header-brand" >
						<Circle figure="circle circle-header" />
						<Triangle figure="triangle triangle-header" />
						<Cross figure="cross cross-header" />
					</Decor>
					<NavLink to="/" className="navbar-link" >
						<h1 className="page-title header-title">VSSOLUTION</h1>
					</NavLink>
					<p className="page-subtitle-h header-subtitle">Продай аккаунт, предметы или валюту в популярных онлайн играх</p>
					<div className="d-flex justify-content-center align-items-start app-navbar">
						{
							isLogin
							? 	<>
									<NavLink to="/account" className="navbar-link">
										<Button variant="outline-primary mr-3" size="lg">Личный кабинет</Button>{' '}
									</NavLink>
									<NavLink to="/" className="navbar-link" onClick={logout}>
										<Button variant="outline-primary" size="lg">Выйти</Button>{' '}
									</NavLink>
								</>
								
							: 	<NavLink to="/login" className="navbar-link">
									<Button variant="outline-primary" size="lg">Войти</Button>{' '}
								</NavLink>
						}
						
					</div>
				</header>
				<Navbar variant="dark" className="d-flex justify-content-center navbar">
						<NavLink to="/brawl-stars" activeClassName="active">
							<Navbar.Brand componentclass="span" >
								<img
									alt=""
									src="images/pics/brawl.png"
									width="40"
									height="41"
									className="d-inline-block align-center"
								/>{' '}
								Brawl Stars
							</Navbar.Brand>
						</NavLink>
						<NavLink to="/albion-online">
							<Navbar.Brand componentclass="span">
								<img
									alt=""
									src="images/pics/albion.png"
									width="77"
									height="41"
									className="d-inline-block align-center"
								/>{' '}
								Albion Online
							</Navbar.Brand>
						</NavLink>
						<NavLink to="/league-of-legends">
							<Navbar.Brand componentclass="span">
								<img
									alt=""
									src="images/pics/lol.png"
									width="69"
									height="41"
									className="d-inline-block align-center"
								/>{' '}
								League of Legends
							</Navbar.Brand>
						</NavLink>
						<NavLink to="/hearthstone" >
							<Navbar.Brand componentclass="span">
								<img
									alt=""
									src="images/pics/hearthstone.png"
									width="40"
									height="41"
									className="d-inline-block align-center"
								/>{' '}
								Hearthstone
							</Navbar.Brand>
						</NavLink>
						<NavLink to="/world-of-warcraft">
							<Navbar.Brand componentclass="span">
								<img
									alt=""
									src="images/pics/wow.png"
									width="42"
									height="41"
									className="d-inline-block align-center"
								/>{' '}
								World of Warcraft
							</Navbar.Brand>
						</NavLink>
						<NavLink to="/steam" >
							<Navbar.Brand componentclass="span">
								<img
									alt=""
									src="images/pics/steam.png"
									width="40"
									height="41"
									className="d-inline-block align-center"
								/>{' '}
								Steam
							</Navbar.Brand>
						</NavLink>
						<NavLink to="/other">
							<Navbar.Brand componentclass="span">
								<img
									alt=""
									src="images/pics/other.png"
									width="40"
									height="41"
									className="d-inline-block align-center"
								/>{' '}
								Другие игры
							</Navbar.Brand>
						</NavLink>
				</Navbar>
			</>
	)
}
