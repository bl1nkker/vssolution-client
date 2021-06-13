import React 			from 'react';
import ButtonChoise 	from '../components/buttons/ButtonChoise';
import ButtonSubmit 	from '../components/buttons/ButtonSubmit';
import Circle 			from '../components/Decor/Circle';
import Cross 			from '../components/Decor/Cross';
import Decor 			from '../components/Decor/Decor';
import Square 			from '../components/Decor/Square';
import Triangle 		from '../components/Decor/Triangle';
import Footer 			from '../components/Footer/Footer';
import { Modal } 		from '../components/Form/components/Modal/Modal';
import Radio 			from '../components/Form/components/Radio/Radio';
import Slider 			from '../components/Form/components/Slider/Slider';
import TextArea 		from '../components/Form/components/TextArea/TextArea';
import SocialSubtitle 	from '../components/Form/components/TextInput/SocialSubtitle';
import TextInput 		from '../components/Form/components/TextInput/TextInput';
import Form 			from '../components/Form/Form';
import Header 			from '../components/header/Header';
import { submitData } 	from '../hooks/submit.hook';

export default class WorldOfWarcraft extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			modalActive: false,
			userData: JSON.parse(localStorage.getItem('userData'))
		}
		this.submitWow = this.submitWow.bind(this);
	}
	
	async submitWow(event) {
		const data = new FormData();
		data.append("gameName", "World of Warcraft");
		if (this.state.userData) {
			data.append("userId", this.state.userData.userId);
			data.append("name", this.state.userData.name);
		};
		data.append("subscribe", event.target[0].checked ? event.target[0].value : event.target[1].value);
		data.append("armoryLink", event.target[2].value);
		data.append("goldsPerHero", event.target[3].value);
		data.append("price", event.target[4].value);
		data.append("accDescription", event.target[5].value);
		data.append("contacts", event.target[6].value);
		
		event.preventDefault();
		submitData('/sell/account/wow', data);
		this.setState({modalActive: true});
		setTimeout(() => window.scrollTo(0, 0), 3000);
	}
	render() {
		return(
			<div>
				<Header 
					page="wow"
					offer="Продай аккаунт в World of Warcraft по выгодной стоимости"
					img="images/hero-wow.png"
					blockClass="wow"
				>
					<ButtonChoise 
						btnName="choise"
						href="#form"
						text="Продать аккаунт"
					/>
				</Header>
				<Decor blockClass="wow-form">
					<Circle figure="circle-wow-form"/>
					<Cross figure="cross-wow-form"/>
					<Square figure="square-wow-form"/>
					<Triangle figure="triangle-wow-form"/>
				</Decor>
				<Form submitHandler={this.submitWow} id="form">
					<Modal active={this.state.modalActive} />
					<img src="images/pics/wow/wow-item1.png" alt="" className="wow-item1"/>
					<img src="images/pics/wow/wow-item2.png" alt="" className="wow-item2"/>
					<img src="images/pics/wow/wow-item3.png" alt="" className="wow-item3"/>
					<Radio
						title="Уточните, присутствует ли на Вашем аккаунте оплаченная подписка?"
						name="subscribe"
					/>
					<TextInput 
						title="Укажите ссылку на самого прокаченного персонажа"
						name="armoryLink"
						required
					>
						<SocialSubtitle text="Предоставь ссылку на Armory"/>
					</TextInput>
					<Slider 
						title="Расскажи сколько золотых монет в сумме на каждом персонаже?"
						name="goldsPerHero"
						max="300000"
						min="1000"
						step="1000"
					/>
					<Slider 
						title="Укажите цену за которую вы хотите продать свой аккаунт"
						name="price"
						max="300000"
						min="100"
						step="100"
					/>
					<TextArea 
						title="Опишите Ваш аккаунт более детально"
						placeholder="Например: наличие редких предметов и их названия и т.д."
						name="accDescription"
						required
					/>
					<TextInput 
						title="Укажите контактную информацию"
						placeholder="Например: xxxxxxx@gmail.com"
						name="contacts"
						required
					>
						<SocialSubtitle text="@Telegram , VK , Номер тел. , Эл. почта и т.д."/>
					</TextInput>
					<ButtonSubmit />
				</Form>
				<Footer />
			</div>
		)
	};
};