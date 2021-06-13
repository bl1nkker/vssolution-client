import React from 'react';
import './TextArea.scss';

export default class TextArea extends React.Component {
	render() {
		return(
			<label htmlFor={this.props.name} className="page-title-label">
				{this.props.title}
				{this.props.children}
				<textarea 
					className="textarea page-title-label" 
					id={this.props.name} 
					placeholder={this.props.placeholder} 
					name={this.props.name}
					onChange={this.props.changeHandler}
					required={this.props.required ? true : null}	
				>

				</textarea>
			</label>
		)
	};
};