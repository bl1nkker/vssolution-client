import React from 'react';
import GameCard from './components/GameCard';
import GameCardImage from './components/GameCardImage';
import './GameCatalog.scss';

class GameCatalog extends React.Component {
	render() {
		return (
			<div id="catalog" className="game-catalog container-fluid" >
				<div className="container" >
					<h3 className="game-catalog-title page-title-min" >Каталог игр</h3>
				</div>
				<div className="container" >
					<GameCard 
						bg="bg-hearthstone"
						title="Heartstone"
						subtitle="350 предложений"
						description="Коллекционная карточная онлайн-игра по мотивам вселенной Warcraft, разработанная компанией Blizzard Entertainment"
						btnName="choise"
						href="/hearthstone"
						text="Продать аккаунт"
					>
						<GameCardImage 
							img={
								[
									{
										src: 'images/gameCards/hearthstone/chameleos.png',
										class: 'hs-chameleos',
										alt: 'Chameleos'
									},
									{
										src: 'images/gameCards/hearthstone/il-ginot.png',
										class: 'hs-ilGinot',
										alt: 'Il Ginot'
									},
									{
										src: 'images/gameCards/hearthstone/malchezar.png',
										class: 'hs-malchezar',
										alt: 'Malchezar'
									} 
								]
							}
						/>
					</GameCard>
					<GameCard 
						bg="bg-albion"
						title="Albion Online"
						subtitle="150 предложений"
						description="Кроссплатформенная массовая ролевая многопользовательская онлайн-игра в средневековой стилистике, разработанная и выпущенная Sandbox Interactive"
						btnName="choise"
						href="/albion-online"
						text="Продать аккаунт/Серебро"
					>
						<GameCardImage
							img={
								[
									{
										src: null,
										class: null,
										alt: null
									}
								]
							}
						/>
					</GameCard>
					<GameCard 
						bg="bg-lol"
						title="League of Legends"
						subtitle="200 предложений"
						description="League of Legends - это стратегическая игра MOBA (многопользовательская онлайн-боевая арена)"
						btnName="choise"
						href="/league-of-legends"
						text="Продать аккаунт"
					>
						<GameCardImage 
							img={
								[
									{
										src: 'images/gameCards/lol/lol-hero.png',
										class: 'lol-hero',
										alt: 'League of Legends Hero'
									}
								]
							}
						/>
					</GameCard>
					<GameCard 
						bg="bg-brawl"
						title="Brawl Stars"
						subtitle="200 предложений"
						description="Игра для мобильных устройств в жанре MOBA, разработанная и изданная компанией Supercell. Глобальный релиз состоялся 12 декабря 2018 года."
						btnName="choise"
						href="/brawl-stars"
						text="Продать аккаунт"
					>
						<GameCardImage 
							img={
								[
									{
										src: 'images/gameCards/brawl-stars/brawl-boy.png',
										class: 'brawl-boy',
										alt: 'Brawl Stars Hero Boy'
									},
									{
										src: 'images/gameCards/brawl-stars/brawl-girl.png',
										class: 'brawl-girl',
										alt: 'Brawl Stars Hero Girl'
									}
								]
							}
						/>
					</GameCard>
					<GameCard 
						bg="bg-wow"
						title="World of Warcraft"
						subtitle="450 предложений"
						description="Массовая многопользовательская ролевая онлайн-игра, разработанная и издаваемая компанией Blizzard Entertainment"
						btnName="choise"
						href="/world-of-warcraft"
						text="Продать аккаунт"
					>
						<GameCardImage 
							img={
								[
									{
										src: 'images/gameCards/wow/wow-illidan.png',
										class: 'wow-illidan',
										alt: 'World of Warcraft Hero - Illidan'
									}
								]
							}
						/>
					</GameCard>
					<GameCard 
						bg="bg-steam"
						title="Steam"
						subtitle="200 предложений"
						description="Онлайн-сервис цифрового распространения компьютерных игр и программ, разработанный и поддерживаемый компанией Valve"
						btnName="choise"
						href="/steam"
						text="Продать аккаунт"
					>
						<GameCardImage 
							img={
								[
									{
										src: 'images/gameCards/steam/steam-dota.png',
										class: 'steam-dota',
										alt: 'Steam - Dota 2 Hero Bloodseeker'
									},
									{
										src: 'images/gameCards/steam/steam-pubg.png',
										class: 'steam-pubg',
										alt: 'Steam Playerunknowns Battleground Hero'
									}
								]
							}
						/>
					</GameCard>
				</div>
			</div>
		)
	}
};

export default GameCatalog;