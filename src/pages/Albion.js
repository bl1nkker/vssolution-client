import axios 			from 'axios';
import React 			from 'react';
import { serverURL } from '../axios';
import ButtonChoise 	from '../components/buttons/ButtonChoise';
import ButtonSubmit 	from '../components/buttons/ButtonSubmit';
import ButtonUpload 	from '../components/buttons/ButtonUpload';
import Circle 			from '../components/Decor/Circle';
import Cross 			from '../components/Decor/Cross';
import Decor 			from '../components/Decor/Decor';
import Square 			from '../components/Decor/Square';
import Triangle 		from '../components/Decor/Triangle';
import Footer 			from '../components/Footer/Footer';
import { Modal } 		from '../components/Form/components/Modal/Modal';
import Slider 			from '../components/Form/components/Slider/Slider';
import SliderSilver 	from '../components/Form/components/Slider/SliderSilver';
import TextArea 		from '../components/Form/components/TextArea/TextArea';
import SocialSubtitle 	from '../components/Form/components/TextInput/SocialSubtitle';
import TextInput 		from '../components/Form/components/TextInput/TextInput';
import Upload 			from '../components/Form/components/Upload/Upload';
import Form 			from '../components/Form/Form';
import Header 			from '../components/header/Header';
import { submitData } 	from '../hooks/submit.hook';

class Albion extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			modalActive: false,
			modalActiveSilver: false,
			userData: JSON.parse(localStorage.getItem('userData')),
			gameName: "Albion Online",
			uploadedFiles: [],
			uploadedFileName: '',
			uploadedFileSize: null
			
		}
		this.submitAlbion = this.submitAlbion.bind(this);
		this.sellSilver = this.sellSilver.bind(this);
		this.fileUploadHandler = this.fileUploadHandler.bind(this);
		this.removeFromList = this.removeFromList.bind(this)
	}

	// Added
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

	

	async submitAlbion(event) {
		const data = new FormData();
		for (let key of event.target[3].files) {
			data.append("screenshot", key);
		}
		data.append("gameName", this.state.gameName)
		if (this.state.userData) {
			data.append("userId", this.state.userData.userId);
			data.append("name", this.state.userData.name);
		}
		data.append("accountFame", event.target[0].value);
		data.append("valueProperty", event.target[1].value);
		data.append("price", event.target[2].value);
		data.append("contacts", event.target[4].value);
		
		event.preventDefault();
		// http://localhost:5000/sell/account/albion
		await axios.post(serverURL + '/sell/account/albion', data, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		.catch(e => console.log(e));
		this.setState({modalActive: true});
		setTimeout(() => window.scrollTo(0, 0), 3000);
	}
	async sellSilver(event) {
		const data = new FormData();
		if (this.state.userData) {
			data.append("userId", this.state.userData.userId);
			data.append("name", this.state.userData.name)
		}
		data.append("gameName", this.state.gameName)
		data.append("numberSilver", event.target[0].value)
		data.append("contacts", event.target[1].value)
		
		event.preventDefault();
		submitData('/sell/currency/albion', data);
		this.setState({modalActiveSilver: true});
		setTimeout(() => window.scrollTo(0, 0), 3000);
	}
	render() {
		return (
			<div>
				<Header 
					page="albion"
					offer="Продай аккаунт/серебро в Albion Online по выгодной стоимости"
					img="images/hero-albion.png"
					blockClass="albion"
				>
					<ButtonChoise 
						btnName="choise"
						href="#form"
						text="Продать аккаунт"
					/>
					<ButtonChoise 
						btnName="sell"
						href="#sell-form"
						text="Продать серебро"
					/>
				</Header>
				<Decor blockClass="albion-form">
					<Square figure="square-albion-form"/>
					<Circle figure="circle-albion-form"/>
					<Triangle figure="triangle-albion-form"/>
					<Cross figure="cross-albion-form" />
				</Decor>
				<Form submitHandler={this.submitAlbion} id="form">
					<Modal active={this.state.modalActive} />
					<img src="images/pics/albion/albion-item1.png" alt="" className="albion-item1" />
					<img src="images/pics/albion/albion-item2.png" alt="" className="albion-item2" />
					<Slider 
						title="Укажите количество фейма на вашем аккаунте"
						name="accountFame"
						max="1000000000"
						min="50000"
						step="10000"
					>
						<SocialSubtitle text="Мы покупаем аккаунты, исключительно, от 50к фейма"/>
					</Slider>
					<TextArea 
						title="Присутствует ли на Вашем аккаунте ценное имущество (Золото|Серебро|Вещи)?"
						placeholder="Например: 1000 золота , 50000 серебра и т.д."
						name="valueProperty"
						required
					/>
					<Slider 
						title="Укажите цену за которую вы хотите продать свой аккаунт"
						name="price"
						max="300000"
						min="100"
						step="100"
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
				<Form submitHandler={this.sellSilver} id="sell-form">
					<Modal active={this.state.modalActiveSilver} />
					<img src="images/pics/albion/albion-item3.png" alt="" className="albion-item3" />
					<img src="images/pics/albion/albion-item4.png" alt="" className="albion-item4" />
					<SliderSilver
						title="Какое количество серебра Вы хотите продать ?" 
						name="numberSilver"
						max="1000000000"
						min="25000000"
						step="1000000"
					>
						<SocialSubtitle text="Мы покупаем серебро, исключительно, от 25.000.000 серебра, и НЕ принимаем вещи к оплате!" />
					</SliderSilver>
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
	}
};

export default Albion;