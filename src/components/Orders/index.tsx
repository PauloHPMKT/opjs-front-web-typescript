import { Order } from "../../types/Order";
import OrdersBoard from "../OrdersBoard";
import { Container } from "./styles"

const orders: Order[] = [
	{
		"_id": "63742076c5faac0eeefc37c8",
		"table": "mesa 12",
		"status": "WAITING",
		"products": [
			{
				"product": {
					"name": "Pizza quatro queijos",
					"imagePath": "1668551835332-burguer-banner.jpg",
					"pricing": 40.5,
				},
				"quantity": 3,
				"_id": "63742076c5faac0eeefc37c9"
			},
			{
				"product": {
					"name": "Coca-cola",
					"imagePath": "1668553097714-coca.png",
					"pricing": 7,
				},
				"quantity": 2,
				"_id": "63742076c5faac0eeefc37ca"
			}
		],
	}
]

const Orders = () => {
	return (
		<Container>
			<OrdersBoard
				icon="⏱️"
				title="Fila de espera"
				orders={orders}
			/>
			<OrdersBoard
				icon="⌛"
				title="Em preparacao"
				orders={[]}
			/>
			<OrdersBoard
				icon="✔️"
				title="Pronto!"
				orders={[]}
			/>
		</Container>
	)
}

export default Orders;
