import React, { useContext, useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import ButtonSubmit from '../components/buttons/ButtonSubmit';
import Footer from '../components/Footer/Footer';
import TextInput from '../components/Form/components/TextInput/TextInput';
import Form from '../components/Form/Form';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import Message from '../components/Form/components/Message/Message';
import { serverURL } from '../axios';

const AuthPage = () => {
	const { login } = useContext(AuthContext);
	const [loginVisible, setLoginVisible] = useState(false);
	const [loginMessage, setLoginMessage] = useState('');
	const [regVisible, setRegVisible] = useState(false);
	const [regMessage, setRegMessage] = useState('');
	const [created, setCreated] = useState(false);
	const history = useHistory();
	const location = useLocation();
	const {from} = location.state || { from: {pathname: "/"} };

	const loginHandler = async (event) => {
		event.preventDefault();
		const data = {
				email: event.target[0].value,
				password: event.target[1].value
			};
		try {
			// http://localhost:5000/api/auth/login
			await axios.post(serverURL + '/api/auth/login', data, {
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(response => {
				if (response.status === 202) {
					setLoginMessage(response.data.message);
					setLoginVisible(true);
				} else {
					login(response.data.token, response.data.userId, response.data.name);
					history.replace(from)
				}
				
				console.log(response);
			})
		} catch (error) {
			console.log(error);
		}
	};
	
	const registerHandler = async (event) => {
		event.preventDefault();
		const data = {
			email: event.target[0].value,
			name: event.target[1].value,
			password: event.target[2].value
		};
		try {
			// http://localhost:5000/api/auth/register
			await axios.post(serverURL + '/api/auth/register', data, {
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(response => {
				if (response.status === 202) {
					setRegMessage(response.data.message);
					setRegVisible(true)
				}
				if (response.statusText === "Created") {
					setCreated(true);
				}
			});
		} catch (error) {
			console.log(error);
		}
	}

		return(
			<BrowserRouter>
				<Switch>
					<React.Fragment>
						<Route path="/login">
							<Form formTitle="Заполните поля для входа в систему" submitHandler={loginHandler}>
								<Message visible={loginVisible} message={loginMessage} />
								<TextInput 
									title="Введите адрес электронной почты"
									placeholder="Например: example@mail.ru"
									name="email"
									type="email"
									required
								/>
								<TextInput 
									title="Введите пароль"
									placeholder="Password"
									name="password"
									type="password"
									required
									minLength="6"
								/>
								<ButtonSubmit btnText="Войти"/>
									<p className="page-title-label text-center py-5">или</p>
								<Link to="/register">
									<p className="button-submit page-title-label text-center d-flex align-items-center justify-content-center">Зарегистрируйтесь для входа в систему</p>
								</Link >
							</Form>
							<Footer />
						</Route>

						<Route path="/register">
							<Form formTitle="Заполните поля для регистрации в системе" submitHandler={registerHandler}>
								<Message visible={regVisible} message={regMessage} />
								{
									created
									? <Redirect to="/login" />
									: null
								}
								<TextInput 
									title="Введите адрес электронной почты"
									placeholder="Например: example@mail.ru"
									name="email"
									type="email"
									required
								/>
								<TextInput 
									title="Введите свое имя"
									placeholder="Имя или Фамилия или Nickname"
									name="name"
									type="text"
									required
								/>
								<TextInput 
									title="Введите пароль"
									placeholder="Password"
									name="password"
									type="password"
									required
								/>
								<ButtonSubmit btnText="Зарегистрироваться"/>
								<p className="page-title-label text-center py-5">или</p>
								<Link to="/login">
									<p className="button-submit page-title-label text-center d-flex align-items-center justify-content-center">Войдите в систему, если вы уже зарегистрированы</p>
								</Link >
							</Form>
							<Footer />
						</Route>
					</React.Fragment>
				</Switch>
			</BrowserRouter>
		)
	};

export default AuthPage;