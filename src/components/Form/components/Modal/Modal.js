import React from 'react';
import './Modal.scss';

export const Modal = ({active}) => {
	return (
		<div className={active ? "modalForm active" : "modalForm"}>
			<div className="modalForm-container d-flex flex-column justify-content-center align-items-center" onClick={e => e.stopPropagation()}>
				<div className="modalForm-icon"></div>
				<h1 className="modalForm-text">Ваша Анкета принята, ожидайте ответа</h1>
			</div>
		</div>
	)
}