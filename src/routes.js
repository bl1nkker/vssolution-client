import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navbar/Navbar';
import Main from './pages/Main';
import BrawlStars from './pages/BrawlStars';
import Albion from './pages/Albion';
import LeagueOfLegends from './pages/LeagueOfLegends';
import Hearthstone from './pages/Hearthstone';
import WorldOfWarcraft from './pages/WorldOfWarcraft';
import Steam from './pages/Steam';
import Other from './pages/Other';
import AuthPage from './pages/AuthPage';
import Account from './pages/Account';

export const useRoutes = () => {
		return(
			<div className='app-container'>
				<Navibar />
				<Switch>
					<Route path="/" exact component={Main} />
					<Route path="/brawl-stars" component={BrawlStars} />
					<Route path="/albion-online" component={Albion} />
					<Route path="/league-of-legends" component={LeagueOfLegends} />
					<Route path="/hearthstone" component={Hearthstone} />
					<Route path="/world-of-warcraft" component={WorldOfWarcraft} />
					<Route path="/steam" component={Steam} />
					<Route path="/other" component={Other} />
					<Route path="/account" component={Account} />
					<Route path="/login" component={AuthPage} />
				</Switch>
			</div>
		)
};