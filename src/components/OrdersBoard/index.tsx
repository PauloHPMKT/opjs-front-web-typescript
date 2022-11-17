import { Board, OrdersContainer } from "./styles";


const OrdersBoard = () => {
	return (
		<Board>
			<header>
				<span>⏱️</span>
				<strong>Fila de espera</strong>
				<span>(1)</span>
			</header>
			<OrdersContainer>
				<button type="button">
					<strong>Mesa 2</strong>
					<span>2 Itens</span>
				</button>
				<button type="button">
					<strong>Mesa 2</strong>
					<span>2 Itens</span>
				</button>
			</OrdersContainer>
		</Board>
	)
}

export default OrdersBoard;
