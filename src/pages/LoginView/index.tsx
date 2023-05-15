import { CardLoginView, Container } from "./styles";

import logo from '../../assets/images/logo-foodsquare-removebg-preview.png';
import { FormLogin } from "../../components/FormLogin";

export const LoginView = () => {
	return (
		<Container>
			<CardLoginView>
				<div className="fs-banner">
					<h2>Seja bem vindo ao</h2>
					<img src={logo} alt="Logo Food sqaure" />
				</div>
				<FormLogin />
			</CardLoginView>
		</Container>
	);
}
