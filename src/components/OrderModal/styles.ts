import styled from "styled-components";

export const Overlay = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(4.5px);
	left: 0;
	top: 0;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ModalBody = styled.div`
	background-color: #fff;
	width: 480px;
	border-radius: 8px;
	padding: 32px;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		strong {
			font-size: 24px;
		}

		button {
			line-height: 0;
			border: none;
			background: transparent;
		}
	}

	.status-container {
		margin-top: 32px;

		small {
			font-size: 14px;
			opacity: 0.8;
		}

		div {
			margin-top: 8px;
			display: flex;
			align-items: center;
			gap: 8px;
		}
	}
`

export const OrderDetails = styled.div`
	margin-top: 32px;

	> strong {
		font-weight: 500;
		font-size: 14px;
		opacity: 0.8;
}
`
