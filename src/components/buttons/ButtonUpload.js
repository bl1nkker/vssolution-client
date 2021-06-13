import React from 'react';
import './Buttons.scss';

export default class ButtonUpload extends React.Component {
	render() {
		return(
			<>
				<label 
					htmlFor={this.props.id} 
					className="button-upload d-flex justify-content-center align-items-center non-file"
				>
					{this.props.btnName}
				</label>
				<input 
						type="file"
						name={this.props.name}
						id={this.props.id}
						onChange={this.props.changeHandler}
						multiple
				/>
			</>
			
		)
	};
};