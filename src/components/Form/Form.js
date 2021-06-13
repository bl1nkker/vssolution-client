import React from 'react';
import './Form.scss';

export default class Form extends React.Component {
	render() {
		return(
			<div className="container" id={this.props.id}>
				<div className="d-flex justify-content-center pb-5">
					<h1 className="page-title-min form-title text-center" >
						{this.props.formTitle ? this.props.formTitle : 'Заполни анкету , чтобы продать аккаунт' }
					</h1>
				</div>
				<form className="form-container container" onSubmit={this.props.submitHandler}>
					{this.props.children}
				</form>
			</div>
		)
	}
};