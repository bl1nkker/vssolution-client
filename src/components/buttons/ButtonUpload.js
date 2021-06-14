import React from 'react';
import './Buttons.scss';

// Added 
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default class ButtonUpload extends React.Component {
	render() {
		console.log(this.props.uploadedFiles);
		return(
			<>
				<label 
					htmlFor={this.props.id} 
					// To production
					className={`button-upload d-flex justify-content-center align-items-center 
					${this.props.uploadedFiles.length !== 0 ? 'has-file' : 'non-file'}`}
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
				{this.props.uploadedFiles && 
				<div className='files-info-container'>
					{this.props.uploadedFiles.map(file => 
					<div className='file-info-container'>
					<p className='file-info' key={file.size}>{file.name} ({file.size}B)</p>
					<button className='file-delete' onClick={event => this.props.removeFromList(event, file)}><HighlightOffIcon fontSize='small'/></button>
					</div>)}
				</div>}
				
			</>
			
		)
	};
};