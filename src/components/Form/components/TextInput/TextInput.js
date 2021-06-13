import React from 'react';
import './TextInput.scss';

export default class TextInput extends React.Component {

	render() {
		return(
			<label htmlFor={this.props.name} className="page-title-label text-input-label">
				{this.props.title}
				{this.props.children}
				<input 
					className="text-input page-title-label" 
					type={this.props.type ? this.props.type : "text" }
					max={this.props.type === "number" ? this.props.max : null}
					id={this.props.name} 
					name={this.props.name} 
					placeholder={this.props.placeholder} 
					onChange={this.props.changeHandler}
					required={this.props.required ? true : null}
					autoComplete="false"
					minLength={this.props.minLength}
				/>
			</label>
		)
	};
};