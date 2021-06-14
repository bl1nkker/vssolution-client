import React 			from 'react';
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
import TextArea 		from '../components/Form/components/TextArea/TextArea';
import SocialSubtitle 	from '../components/Form/components/TextInput/SocialSubtitle';
import TextInput 		from '../components/Form/components/TextInput/TextInput';
import Upload 			from '../components/Form/components/Upload/Upload';
import Form 			from '../components/Form/Form';
import Header 			from '../components/header/Header';
import axios			from 'axios';

// Useless in production
import { serverURL } from '../axios';

export default class Other extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			modalActive: false,
			userData: JSON.parse(localStorage.getItem('userData')),
			uploadedFileName: '',
			uploadedFileSize: null
		}
		this.submitOther = this.submitOther.bind(this);
		this.fileUploadHandler = this.fileUploadHandler.bind(this);
	}

	fileUploadHandler (event) {
		const btnUpload = document.querySelector(".button-upload");
		if (event.target.files) {
			this.setState({ uploadedFileName: event.target.files[0]?.name, 
				uploadedFileSize:event.target.files[0]?.size})
			// Removed
			// btnUpload.classList.remove('non-file');
			// btnUpload.classList.add('has-file');
		}
	}
	
	async submitOther(event) {
		const data = new FormData();
		for (let key of event.target[3].files) {
			data.append("screenshot", key);
		}
		data.append("gameName", event.target[0].value)
		if (this.state.userData) {
			data.append("userId", this.state.userData.userId);
			data.append("name", this.state.userData.name);
		};
		data.append("accDescription", event.target[1].value);
		data.append("price", event.target[2].value);
		data.append("contacts", event.target[4].value);
		
		event.preventDefault();
		// http://localhost:5000/sell/account/other
		await axios.post(serverURL + '/sell/account/other', data, {
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
		return (
			<div>
				<Header 
					page="other"
					offer="Продай аккаунт в любой игре по выгодной стоимости" 
					img="images/hero-other.png"
					blockClass="other"
				>
					<ButtonChoise 
						btnName="choise"
						href="#form"
						text="Продать аккаунт"
					/>
				</Header>
				<Decor blockClass="other-form">
					<Circle figure="circle-other-form"/>
					<Cross figure="cross-other-form"/>
					<Square figure="square-other-form"/>
					<Triangle figure="triangle-other-form"/>
				</Decor>
				<Form submitHandler={this.submitOther} id="form">
					<Modal active={this.state.modalActive} />
					<img src="images/pics/other/other-item1.png" alt="" className="other-item1"/>
					<img src="images/pics/other/other-item2.png" alt="" className="other-item2"/>
					<img src="images/pics/other/other-item3.png" alt="" className="other-item3"/>
					<TextInput 
						title="Укажите название игры"
						placeholder="Например: Overwatch"
						name="gameName"
						required
					/>
					<TextArea
						title="Создайте детальное описание Вашего аккаунта:"
						placeholder="Например: наличие редких предметов и их названия и т.д."
						name="accDescription"
						required
					>
						<SocialSubtitle text="Описание помогает нашим сотрудникам максимально быстро рассмотреть Ваше предложение"/>
					</TextArea>
					<Slider 
						title="Укажите цену за которую Вы хотите продать свой аккаунт"
						name="price"
						max="300000"
						min="100"
						step="100"
					/>
					<Upload title="Загрузите скриншот Вашего аккаунта/вещи">
						<SocialSubtitle text="Без этого шага Ваша анкета будет недействительна"/>
						<ButtonUpload 
							btnName="Загрузить файл(ы)"
							name="screenshot"
							id="screenshot"
							// Added
							filesIsUploaded={this.state.uploadedFileName}
							changeHandler={e => this.fileUploadHandler(e)}
						/>
						<p>{this.state.uploadedFileName}</p>
						{this.state.uploadedFileSize && <p>{this.state.uploadedFileSize} bytes</p>}
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