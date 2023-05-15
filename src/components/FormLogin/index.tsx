import { ChangeEvent, useContext, useState } from "react";
import { Button } from "../Button";
import { Form } from "./styles";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
	const auth = useContext(AuthContext)
	const navigate = useNavigate()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	const handleLogin = async () => {
		if (email && password) {
			const isLogged = await auth.signin(email, password);
			if (isLogged) {
				navigate('/')
			} else {
				alert('Login falhou!')
			}
		}
	}

	return (
		<Form>
			<input
				type="text"
				placeholder="email"
				onChange={handleEmailInput}
				value={email}
			/>
			<input
				type="password"
				placeholder="senha"
				onChange={handlePasswordInput}
				value={password}
			/>
			<Button handleClickEvent={handleLogin}>
				Login
			</Button>
		</Form>
	);
}
