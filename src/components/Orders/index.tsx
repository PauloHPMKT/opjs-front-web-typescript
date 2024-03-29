import { useEffect, useState } from "react";
import socketIo from "socket.io-client";
import { Order } from "../../types/Order";
import { api } from "../../utils/api";
import OrdersBoard from "../OrdersBoard";
import { Container } from "./styles"

// testar conectividade com da mesa com websocket
const Orders = () => {
	const [orders, setOrders] = useState<Order[]>([])

	useEffect(() => {
		const socket = socketIo('http://localhost:3008', {
			transports: ['websocket']
		})

		socket.on('order_new', (order) => {
			setOrders(prevState => prevState.concat(order));

			console.log(order);
		})
	}, [])

	useEffect(() => {
		api.get('/orders').then(({ data }) => {
			setOrders(data)
		})
	}, [])

	const waiting = orders.filter(order => order.status === 'WAITING')
	const inProduction = orders.filter(order => order.status === 'IN_PRODUCTION')
	const done = orders.filter(order => order.status === 'DONE')

	const handleCancelOrder = (orderId: string) => {
		setOrders(prevState => prevState.filter(order => order._id !== orderId))
	}

	const handleOrderStatusChange = (orderId: string, status: Order['status']) => {
		setOrders(prevState => prevState.map(order => (
			order._id === orderId
				?	{ ...order, status }
				: order
		)))
	}

	return (
		<Container>
			<OrdersBoard
				icon="⏱️"
				title="Fila de espera"
				orders={waiting}
				onCancelOrder={handleCancelOrder}
				onChangeOrderStatus={handleOrderStatusChange}
			/>
			<OrdersBoard
				icon="⌛"
				title="Em preparacao"
				orders={inProduction}
				onCancelOrder={handleCancelOrder}
				onChangeOrderStatus={handleOrderStatusChange}
			/>
			<OrdersBoard
				icon="✔️"
				title="Pronto!"
				orders={done}
				onCancelOrder={handleCancelOrder}
				onChangeOrderStatus={handleOrderStatusChange}
			/>
		</Container>
	)
}

export default Orders;
