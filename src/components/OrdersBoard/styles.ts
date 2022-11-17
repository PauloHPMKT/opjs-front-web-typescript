
import styled from "styled-components"

export const Board = styled.div`
	padding: 16px;
	border: 1px solid rgba(204, 204, 204, 0.4);
	border-radius: 16px;
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	> header { // estilos so se aplicam ao filho direto do Board
		padding: 8px;
		font-size: 14px;
		display: flex;
		align-items: center;
		gap: 8px; // seta uma distancia igual para todos os elementos
	}
`

export const OrdersContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 24px;

	button {
		background-color: #fff;
		border: 1px solid rgba(204, 204, 204, 0.4);
		border-radius: 8px;
		height: 128px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4px;

		strong {
			font-weight: 500;
		}

		span {
			font-size: 14px;
			color: #666;
		}

		& + button {
			margin-top: 24px; //quanto tiver um elemento anterior ele mesmo aplica essa regra
		}
	}
`
