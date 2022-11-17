import { ModalBody, OrderDetails, Overlay } from "./styles"
import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";

interface orderModalProps {
	openModal: boolean;
	itemOrder: Order | null
}

const OrderModal = ({ openModal, itemOrder }: orderModalProps) => {
	if (!openModal || !itemOrder) {
		// se nao tiver nada, nao retorna nada
		return null
	}

	//1 abordagem - utiliza a funcao formatCurrency() para formatar o valor
	/*let total = 0
	itemOrder.products.forEach(({ product, quantity }) => {
		total += product.pricing * quantity;
	})*/

	//2 abordagem - utilizando reduce - pega o valor inicial ejoga para dentro do total acumulando seu valor e repassando para frnete
	const total = itemOrder.products.reduce((total, { product, quantity }) => {
		return total + (product.pricing * quantity)
	}, 0)

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
					<div className="order-item">
						{
							itemOrder.products.map(({ _id, product, quantity }) => (
								<div className="item" key={_id}>
									<img
										width="60"
										height="40"
										src={`http://localhost:3008/uploads/${product.imagePath}`}
										alt={product.name}
									/>
									<span className="quantity">{quantity}x</span>
									<div className="product-details">
										<strong>{product.name}</strong>
										<span>{formatCurrency(product.pricing)}</span>
									</div>
								</div>
							))
						}
					</div>
					<div className="total">
						<span>Total</span>
						<strong>{formatCurrency(total)}</strong>
					</div>
				</OrderDetails>
			</ModalBody>
		</Overlay>
	)
}

export default OrderModal
