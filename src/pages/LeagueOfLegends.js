import React 			from 'react';
import ButtonChoise 	from '../components/buttons/ButtonChoise';
import TextArea 		from '../components/Form/components/TextArea/TextArea';
import TextInput 		from '../components/Form/components/TextInput/TextInput';
import Upload 			from '../components/Form/components/Upload/Upload';
import Form 			from '../components/Form/Form';
import Header 			from '../components/header/Header';
import SocialSubtitle 	from '../components/Form/components/TextInput/SocialSubtitle';
import ButtonUpload 	from '../components/buttons/ButtonUpload';
import Footer 			from '../components/Footer/Footer';
import ButtonSubmit 	from '../components/buttons/ButtonSubmit';
import Decor 			from '../components/Decor/Decor';
import Circle 			from '../components/Decor/Circle';
import Square 			from '../components/Decor/Square';
import Triangle 		from '../components/Decor/Triangle';
import Cross 			from '../components/Decor/Cross';
import { Modal } 		from '../components/Form/components/Modal/Modal';
import axios			from 'axios';
import { serverURL } from '../axios';

export default class LeagueOfLegends extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			modalActive: false,
			userData: JSON.parse(localStorage.getItem('userData')),
			uploadedFileName: '',
			uploadedFileSize: null,
			uploadedFiles: [],
		}
		this.submitLol = this.submitLol.bind(this);
		this.fileUploadHandler = this.fileUploadHandler.bind(this);
		this.removeFromList = this.removeFromList.bind(this)
	}

	removeFromList (event, fileToRemove)
	{
		event.preventDefault()
		const updatedFilesList = [...this.state.uploadedFiles].filter(file => file.name !== fileToRemove.name)
		this.setState({ uploadedFiles: [...updatedFilesList] })
		// console.log(updatedFilesList);
	}
	fileUploadHandler (event) {
		const btnUpload = document.querySelector(".button-upload");
		if (event.target.files) {
			let listOfFiles = []
			Array.from(event.target.files).forEach(file => listOfFiles.push(file));
			this.setState({ uploadedFiles: [...listOfFiles]})
			// this.setState({ uploadedFileName: event.target.files[0]?.name, 
			// 	uploadedFileSize:event.target.files[0]?.size})

			// Removed
			// btnUpload.classList.remove('non-file');
			// btnUpload.classList.add('has-file');
		}
	}
	
	async submitLol(event) {
		
		const data = new FormData();
		for (let key of event.target[5].files) {
			data.append("screenshot", key);
		}
		data.append("gameName", "League of Legends")
		if (this.state.userData) {
			data.append("userId", this.state.userData.userId);
			data.append("name", this.state.userData.name);
		}
		data.append("serverLocation", event.target[0].value);
		data.append("profileLevel", event.target[1].value);
		data.append("numberChamps", event.target[2].value);
		data.append("skins", event.target[3].value);
		data.append("accountDescription", event.target[4].value);
		data.append("contacts", event.target[6].value);
		
		
		console.log(event)
		event.preventDefault();
		// http://localhost:5000/sell/account/lol
		await axios.post(serverURL + '/sell/account/lol', data, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		.then(response => console.log(response))
		.catch(e => console.log(e));
		this.setState({modalActive: true});
		setTimeout(() => window.scrollTo(0, 0), 3000);
	}
	render() {
		return(
			<div>
				<Header 
					page="lol"
					offer="Продай аккаунт в League of Legends по выгодной стоимости"
					img="images/hero-lol.png"
					blockClass="lol"
				>
					<ButtonChoise
						btnName="choise"
						href="#form"
						text="Продать аккаунт"
					/>
				</Header>
				<Decor blockClass="lol-form">
					<Square figure="square-lol-form"/>
					<Circle figure="circle-lol-form"/>
					<Triangle figure="triangle-lol-form"/>
					<Cross figure="cross-lol-form" />
				</Decor>
				<Form submitHandler={this.submitLol} id="form">
					<Modal active={this.state.modalActive} />
					<img src="images/pics/lol/lol-item1.png" alt="" className="lol-item1"/>
					<img src="images/pics/lol/lol-item2.png" alt="" className="lol-item2"/>
					<img src="images/pics/lol/lol-item3.png" alt="" className="lol-item3"/>
					<img src="images/pics/lol/lol-item4.png" alt="" className="lol-item4"/>
					<TextInput 
						title="На каком сервере находится Ваш аккаунт?"
						placeholder="Например: Россия"
						name="serverLocation"
						required
					/>
					<TextInput 
						title="Укажите уровень Вашего профиля"
						placeholder="Например: 10"
						name="profileLevel"
						type="number"
						required
					/>
					<TextInput 
						title="Укажите количество чемпионов на Вашем аккаунте"
						placeholder="Максимально : 154"
						name="numberChamps"
						type="number"
						max="154"
						required
					/>
					<TextArea 
						title="Какие скины есть на Вашем аккаунте?"
						placeholder="Напишите название скинов через запятую"
						name="skins"
						required
					/>
					<TextArea 
						title="Опишите подробно свой аккаунт"
						placeholder="Например : Укажите колличество часов игры, напишите подробнее о скинах на аккаунте и т.д."
						name="accountDescription"
						required
					/>
					<Upload title="Загрузите скриншот вашего аккаунта">
						<SocialSubtitle text="Без этого шага Ваша анкета будет недействительна" />
						<ButtonUpload 
							btnName="Загрузить файл(ы)"
							name="screenshot"
							id="screenshot"
							changeHandler={e => this.fileUploadHandler(e)}
							// Added
							uploadedFiles={this.state.uploadedFiles}
							changeHandler={e => this.fileUploadHandler(e)}
							removeFromList={this.removeFromList} />
					</Upload>
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