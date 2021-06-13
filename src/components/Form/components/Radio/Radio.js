import React from 'react';
import './Radio.scss';

export default class Radio extends React.Component {
	render() {
		return(
			<label htmlFor={this.props.name} className="page-title-label">
				{this.props.title}
				<div className="d-flex radio-container">
					<label className="radio page-title-label radio-label" htmlFor="subYes">Да
						<input type="radio" name={this.props.name} value="Да" id="subYes" onChange={this.props.changeHandler} defaultChecked />
						<span className="radio-mark"></span>
					</label>
					<label className="radio page-title-label radio-label" htmlFor="subNo">Нет
						<input type="radio" name={this.props.name} value="Нет" id="subNo" onChange={this.props.changeHandler}/>
						<span className="radio-mark"></span>
					</label>
				</div>
			</label>
		)
	};
};