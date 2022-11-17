import { ModalBody, OrderDetails, Overlay } from "./styles"
import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from "../../types/Order";

interface orderModalProps {
	openModal: boolean;
	itemOrder: Order | null
}

const OrderModal = ({ openModal, itemOrder }: orderModalProps) => {
	if (!openModal || !itemOrder) {
		// se nao tiver nada, nao retorna nada
		return null
	}

	return(
		<Overlay>
			<ModalBody>
				<header>
					<strong>{itemOrder.table}</strong>
					<button type="button">
						<img src={closeIcon} alt="botao de fechar" />
					</button>
				</header>
				<div className="status-container">
					<small>Status do pedido</small>
					<div>
						<span>
							{itemOrder.status === 'WAITING' && '⏱️'}
							{itemOrder.status === 'IN_PRODUCTION' && '⌛'}
							{itemOrder.status === 'DONE' && '✔️'}
						</span>
						<strong>
							{itemOrder.status === 'WAITING' && 'Fila de espera'}
							{itemOrder.status === 'IN_PRODUCTION' && 'Em producao'}
							{itemOrder.status === 'DONE' && 'Pronto!'}
						</strong>
					</div>
				</div>
				<OrderDetails>
					<strong>Itens</strong>
				</OrderDetails>
			</ModalBody>
		</Overlay>
	)
}

export default OrderModal
