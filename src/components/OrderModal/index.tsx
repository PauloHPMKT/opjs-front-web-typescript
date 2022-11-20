import { Actions, ModalBody, OrderDetails, Overlay } from "./styles"
import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";

interface orderModalProps {
	openModal: boolean;
	itemOrder: Order | null;
	closeModal: () => void;
	onRemoveOrder: () => Promise<void>;
	isLoading: boolean;
	onChangeOrderStatus: () => void;
}

const OrderModal = ({
	openModal,
	itemOrder,closeModal,
	onRemoveOrder,
	isLoading,
	onChangeOrderStatus
}: orderModalProps) => {
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
					<button onClick={closeModal} type="button">
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
				<Actions>
					{itemOrder.status !== 'DONE' && (
						<button
							type="button"
							className="primary"
							disabled={isLoading}
							onClick={onChangeOrderStatus}
						>
							<span>
								{itemOrder.status === 'WAITING' && '👨‍🍳'}
								{itemOrder.status === 'IN_PRODUCTION' && '✔️'}
							</span>
							<span>
							{itemOrder.status === 'WAITING' && 'Iniciar Producao'}
							{itemOrder.status === 'IN_PRODUCTION' && 'Concluir pedido'}
							</span>
						</button>
					)}
					<button
						type="button"
						className="secondary"
						onClick={onRemoveOrder}
					>
						Cancelar Pedido
					</button>
				</Actions>
			</ModalBody>
		</Overlay>
	)
}

export default OrderModal
