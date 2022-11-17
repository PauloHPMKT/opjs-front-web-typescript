import { ModalBody, Overlay } from "./styles"
import closeIcon from '../../assets/images/close-icon.svg'

interface orderModalProps {
	openModal: boolean;
}

const OrderModal = ({ openModal }: orderModalProps) => {
	if (!openModal) {
		return null
	}

	return(
		<Overlay>
			<ModalBody>
				<header>
					<strong>Mesa 2</strong>
					<button type="button">
						<img src={closeIcon} alt="botao de fechar" />
					</button>
				</header>
			</ModalBody>
		</Overlay>
	)
}

export default OrderModal
