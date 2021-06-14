import React from 'react';
import './Buttons.scss';

export default class ButtonUpload extends React.Component {
	render() {
		return(
			<>
				<label 
					htmlFor={this.props.id} 
					// To production
					className={`button-upload d-flex justify-content-center align-items-center 
					${this.props.filesIsUploaded ? 'has-file' : 'non-file'}`}
				>
					{this.props.btnName}
				</label>
				<input 
						type="file"
						name={this.props.name}
						id={this.props.id}
						onChange={this.props.changeHandler}
						multiple
						accept='.jpg'
				/>
			</>
			
		)
	};
};