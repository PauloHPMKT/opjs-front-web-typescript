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
	//generic types indica que o useState pode receber outros tipos alem do null
	const [selectedOrder, setSelectedOrder] = useState<null | Order>(null)

	const handleOpenOrderDetails = (itemOrder: Order) => {
		setIsModalVisible(true);
		setSelectedOrder(itemOrder)
	}

	const handleCloseModal = () => {
		setIsModalVisible(false);
		setSelectedOrder(null)
	}

	return (
		<Board>

			<OrderModal
				openModal={isModalVisible}
				itemOrder={selectedOrder}
				closeModal={handleCloseModal}
			/>

			<header>
				<span>{icon}</span>
				<strong>{title}</strong>
				<span>{orders.length}</span>
			</header>
			{orders.length > 0 && (
				<OrdersContainer>
				{
					orders.map(itemOrders => (
						<button onClick={() => handleOpenOrderDetails(itemOrders)} type="button" key={itemOrders._id}>
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
