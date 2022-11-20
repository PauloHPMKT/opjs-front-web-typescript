import { useState } from "react";
import { toast } from "react-toastify";
import { Order } from "../../types/Order";
import { api } from "../../utils/api";
import OrderModal from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardsProps {
	icon: string;
	title: string;
	orders: Order[];
	onCancelOrder: (orderId: string) => void;
	onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

const OrdersBoard = ({icon, title, orders, onCancelOrder, onChangeOrderStatus}: OrdersBoardsProps) => {
	const [isModalVisible, setIsModalVisible] =  useState(false)
	//generic types indica que o useState pode receber outros tipos alem do null
	const [selectedOrder, setSelectedOrder] = useState<null | Order>(null)
	const [isLoading, setIsLoading] = useState(false)

	const handleOpenOrderDetails = (itemOrder: Order) => {
		setIsModalVisible(true);
		setSelectedOrder(itemOrder)
	}

	const handleCloseModal = () => {
		setIsModalVisible(false);
		setSelectedOrder(null)
	}

	const handleChangeOrderStatus = async () => {
		setIsLoading(true)

		const status = selectedOrder?.status === 'WAITING'
		 ? 'IN_PRODUCTION'
		 : 'DONE'

		await api.patch(`/orders/${selectedOrder?._id}`, { status })
		toast.success(`O Pedido da mesa ${selectedOrder?.table} teve o status alterado`)
		onChangeOrderStatus(selectedOrder!._id, status)
		setIsLoading(false)
		setIsModalVisible(false)
	}

	const handleCancelOrder = async () => {
		setIsLoading(true)
		api.delete(`/orders/${selectedOrder?._id}`)

		toast.success(`O Pedido da mesa ${selectedOrder?.table} foi cancelado`)
		onCancelOrder(selectedOrder?._id!)
		setIsLoading(false)
		setIsModalVisible(false)
	}

	return (
		<Board>

			<OrderModal
				openModal={isModalVisible}
				itemOrder={selectedOrder}
				closeModal={handleCloseModal}
				onRemoveOrder={handleCancelOrder}
				isLoading={isLoading}
				onChangeOrderStatus={handleChangeOrderStatus}
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
