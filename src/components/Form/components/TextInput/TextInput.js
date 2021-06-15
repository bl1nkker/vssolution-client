import React from 'react';
import './TextInput.scss';

export default class TextInput extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			currentPlaceholder: ''
		}
		this.setPlaceHolder = this.setPlaceHolder.bind(this);
	}

	setPlaceHolder = (event, value) =>{
		event.preventDefault()
		this.setState({ currentPlaceholder:value })
	}

	render() {
		return(
			<label htmlFor={this.props.name} className="page-title-label text-input-label">
				{this.props.title}
				{
				this.props.isContacts ?
				(<div className='social-buttons'>
					<button onClick={(event) => this.setPlaceHolder(event, 'Например: vk.com/***')} className='social-button vk'><img src='images/icons/vk_icon_2.png' /></button>
					<button onClick={(event) => this.setPlaceHolder(event, 'Например: @username')} className='social-button telegram'><img src='images/icons/telegram_icon.png' /></button>
					<button onClick={(event) => this.setPlaceHolder(event, 'Например: +1234567890')} className='social-button phone'><img src='images/icons/phone-call.png' /></button>
					<button onClick={(event) => this.setPlaceHolder(event, 'Например: xxxxxxx@gmail.com')} className='social-button email'><img src='images/icons/gmail_icon.png' /></button>
				</div>)
				:
				this.props.children}
				
				<input 
					className="text-input page-title-label" 
					type={this.props.type ? this.props.type : "text" }
					max={this.props.type === "number" ? this.props.max : null}
					id={this.props.name} 
					name={this.props.name} 
					placeholder={this.state.currentPlaceholder} 
					onChange={this.props.changeHandler}
					required={this.props.required ? true : null}
					autoComplete="false"
					minLength={this.props.minLength}
				/>
			</label>
		)
	};
};