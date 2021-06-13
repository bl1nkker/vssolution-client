import {useState, useEffect, useCallback} from 'react';

export const useAuth = () => {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const [name, setName] = useState(null);
	const [isReady, setIsReady] = useState(false);

	const login = useCallback((jwtToken, id, name) => {
		setToken(jwtToken);
		setUserId(id);
		setName(name);
		localStorage.setItem('userData', JSON.stringify({
			userId: id,
			token: jwtToken,
			name: name
		}))
	}, []);

	const logout = () => {
		setToken(null);
		setUserId(null);
		setName(null);
		localStorage.removeItem('userData');
	};

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('userData'));
		if(data && data.token) {
			login(data.token, data.userId, data.name);
		};
		setIsReady(true)
	}, [login])

	return {login, logout, token, userId, isReady, name};
}