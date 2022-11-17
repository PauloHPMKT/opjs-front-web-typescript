import { useState } from "react";
import { Order } from "../../types/Order";
import OrderModal from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardsProps {
	icon: string;
	title: string;
	orders: Order[];
}

const OrdersBoard = ({icon, title, orders}: OrdersBoardsProps) => {
	const [isModalVisible, setIsModalVisible] =  useState(false)

	const handleOpenOrderDetails = () => {
		setIsModalVisible(true);
	}

	return (
		<Board>

			<OrderModal openModal={isModalVisible} />

			<header>
				<span>{icon}</span>
				<strong>{title}</strong>
				<span>{orders.length}</span>
			</header>
			{orders.length > 0 && (
				<OrdersContainer>
				{
					orders.map(itemOrders => (
						<button onClick={handleOpenOrderDetails} type="button" key={itemOrders._id}>
							<strong>{itemOrders.table}</strong>
							<span>{itemOrders.products.length} Itens</span>
						</button>
					))
				}
				</OrdersContainer>
			)}
		</Board>
	)
}

export default OrdersBoard;
