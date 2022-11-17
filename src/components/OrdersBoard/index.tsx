import { Board, OrdersContainer } from "./styles";

interface OrdersBoardsProps {
	icon: string;
	title: string
}

const OrdersBoard = ({icon, title}: OrdersBoardsProps) => {
	return (
		<Board>
			<header>
				<span>{icon}</span>
				<strong>{title}</strong>
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
