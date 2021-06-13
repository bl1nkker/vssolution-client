import React from 'react';

class GameCardImage extends React.Component {
	render() {
		const img = this.props.img;
		const imgList = img.map((item, index) => {
			return <img key={index} src={item.src} alt={item.alt} className={"game-card-image-img " + item.class} />
		})
		return (
			<div className="game-card-image" >
				{imgList}
			</div>
		)
	}
};

export default GameCardImage;