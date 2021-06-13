import React from 'react';
import './Slider.scss';

export default class Slider extends React.Component {
	constructor(props) {
		super(props)
		this.state = {value: ''};
		
		this.handleChange = this.handleChange.bind(this);
		this.checkPrice = this.checkPrice.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	checkPrice(name) {
		if (name === 'price') {
			return this.state.value ? '₽' + this.state.value : '₽' + (this.props.max/2)
		} else if (name === 'dollar') {
			return this.state.value ? '$' + this.state.value : '$' + (this.props.max/2)
		} else {
			return this.state.value ? this.state.value : (this.props.max/2)
		}
	}
	render() {
		return (
			<label htmlFor={this.props.name} className="slider page-title-label">
				{this.props.title}
				{this.props.children}
				<div className="slider-value">
					<span className="thumb page-subtitle d-flex align-items-center justify-content-center">
						{this.checkPrice(this.props.name)}
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
			</label>
		)
	}
};
