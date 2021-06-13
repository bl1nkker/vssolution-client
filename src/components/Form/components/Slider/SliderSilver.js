import React from 'react';
import './Slider.scss';

export default class SliderSilver extends React.Component {
	constructor(props) {
		super(props)
		this.state = {value: this.props.max / 2};
		
		this.handleChange = this.handleChange.bind(this);
		this.convertSilver = this.convertSilver.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	convertSilver() {
		const silver = this.state.value.toString();
		const subString = silver.substr(0, silver.length - 6);
		const convert = subString * 0.56;
		return convert.toFixed(2) + "$";
	}
	render() {
		return (
			<label htmlFor={this.props.name} className="slider page-title-label">
				{this.props.title}
				{this.props.children}
				<div className="slider-value">
					<span className="thumb page-subtitle d-flex align-items-center justify-content-center">
						{this.state.value}
					</span>
				</div>
				<div className="slider-field d-flex align-items-center justify-content-center">
					<div className="value left page-subtitle">{this.props.min}</div>
					<input 
						id={this.props.name} 
						type="range" 
						name={this.props.name} 
						min={this.props.min} 
						max={this.props.max} 
						value={this.state.value} 
						onChange={this.handleChange} 
						step={this.props.step}
					/>
					<div className="value right page-subtitle">{this.props.max}</div>
				</div>
				<div className="pt-5">
					<p className="page-title-label pb-3 pt-5">Расчетная стоимость Вашего серебра составляет:</p>
					<p className="page-title-min">{this.convertSilver()}</p>
				</div>
			</label>
		)
	}
};
