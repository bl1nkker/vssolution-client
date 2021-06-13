import React from 'react';
import './Buttons.scss';

export default class ButtonSubmit extends React.Component {
	render() {
		return(
			<>
				<button className="button-submit" type="submit" >
					{this.props.btnText ? this.props.btnText : "Отправить Анкету"}
				</button>
			</>
		)
	};
};