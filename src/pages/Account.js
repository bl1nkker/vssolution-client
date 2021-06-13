import React, { useContext, useState } from 'react';
import {AuthContext} from '../context/AuthContext';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './Account.scss';

const Account = () => {
	const { userId } = useContext(AuthContext);
	const [offer, setOffer] = useState('');
	const getOffers = async () => {
		try {
			await axios.post('/api/offer/account', { userId }, 
			{
				headers: {
					'Content-Type' : 'application/json'
				}
			})
			.then((response) => {
				console.log(response.data);
				setOffer(response.data);
			});
		} catch (error) {
			console.log(error);
		}
	};
	const OfferRender = () => {
		if (offer) {
			const offerRender = offer.map((item, index) => 
				<tr key={index}>
					<td >{item.gameName}</td>
					<td >{item.ownerName}</td>
					<td >{item.contacts}</td>
					<td >{item.price + "₽"}</td>
				</tr>
			)
			return (
				<table className="page-title-label">
					<thead>
						<tr>
							<th>Игра</th>
							<th>Имя</th>
							<th>Контакты</th>
							<th>Цена</th>
						</tr>
					</thead>
					<tbody>
						{offerRender}
					</tbody>
				</table>
			)
		} else {
			return null;
		}
	}
	return (
		<div className="account">
			<div className="container">
				<Button 
					variant="outline-success"
					onClick={getOffers}	
					className="my-5"		
				>
					Мои предложения
				</Button>
				<div>
					<OfferRender />
				</div>
			</div>
		</div>
	);

};

export default Account;