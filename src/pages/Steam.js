import React			from 'react';
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
import SocialSubtitle 	from '../components/Form/components/TextInput/SocialSubtitle';
import TextInput 		from '../components/Form/components/TextInput/TextInput';
import Upload 			from '../components/Form/components/Upload/Upload';
import Form 			from '../components/Form/Form';
import Header 			from '../components/header/Header';
import axios			from 'axios';
import { serverURL } from '../axios';

export default class Steam extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			modalActive: false,
			userData: JSON.parse(localStorage.getItem('userData')),
			uploadedFileName: '',
			uploadedFileSize: null,
			
			uploadedFiles: [],
		}
		this.submitSteam = this.submitSteam.bind(this);
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

	async submitSteam(event) {
		const data = new FormData();
		for (let key of event.target[3].files) {
			data.append("screenshot", key);
		}
		data.append("gameName", "Steam");
		if (this.state.userData) {
			console.log();
			data.append("userId", this.state.userData.userId);
			data.append("name", this.state.userData.name);
		}
		data.append("itemName", event.target[0].value);
		data.append("itemPrice", event.target[1].value);
		data.append("dollar", event.target[2].value);
		data.append("contacts", event.target[4].value);
		
		event.preventDefault();
		// http://localhost:5000/sell/account/steam
		await axios.post(serverURL + '/sell/account/steam', data, {
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
		console.log(this.state.uploadedFileName);
		return(
			
			<div>
				<Header 
					page="steam"
					offer="Продай вещи из Steam	по выгодной стоимости"
					img="images/hero-steam.png"
					blockClass="steam"
				>
					<ButtonChoise 
						btnName="choise"
						href="#form"
						text="Продать вещи"
					/>
				</Header>
				<Decor blockClass="steam-form">
					<Circle figure="circle-steam-form"/>
					<Cross figure="cross-steam-form"/>
					<Square figure="square-steam-form"/>
					<Triangle figure="triangle-steam-form"/>
				</Decor>
				<Form 
					submitHandler={this.submitSteam} 
					id="form"
					formTitle="Заполни анкету, чтобы продать вещи"	
				>
					<Modal active={this.state.modalActive} /> 
					<img src="images/pics/steam/steam-item1.png" alt="" className="steam-item1"/>
					<img src="images/pics/steam/steam-item2.png" alt="" className="steam-item2"/>
					<img src="images/pics/steam/steam-item3.png" alt="" className="steam-item3"/>
					<img src="images/pics/steam/steam-item4.png" alt="" className="steam-item4"/>
					<TextInput 
						title="Напиши название предмета, указанное в торговой площадке"
						placeholder="Например: Arms of Desolation"
						name="itemName"
						required
					/>
					<TextInput 
						title="Укажите цену продаваемой вещи на торговой площадке Steam"
						placeholder="Например: $3.25"
						name="itemPrice"
						required
					/>
					<Slider 
						title="Укажите цену за которую Вы хотите продать свою вещь"
						name="dollar"
						max="2000"
						min="0.01"
						step="1"
					/>
					<Upload title="Загрузите скриншот Вашей вещи">
						<SocialSubtitle text="На СКРИНШОТЕ должна быть отображена следующая информация:Название предмета, Актуальная цена, Общее описание предмета"/>
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