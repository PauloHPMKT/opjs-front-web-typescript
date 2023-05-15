import { Button } from "../Button";
import { Form } from "./styles";

export const FormLogin = () => {
	const preventSendEvent = (e: MouseEvent) => {
		e.preventDefault()
		console.log(e);

		alert('teste')
	}

	return (
		<Form>
			<input type="text" placeholder="email" />
			<input type="password" placeholder="senha" />
			<Button handleClickEvent={preventSendEvent}>
				Login
			</Button>
		</Form>
	);
}
