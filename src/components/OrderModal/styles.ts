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

	.order-item {
		margin-top: 16px;

		.item {
			display: flex;

			& + .item {
				margin-top: 16px;
			}

			img {
				border-radius: 6px;
			}

			.quantity {
				font-size: 14px;
				color: #666;
				display: block;
				margin-left: 12px;
				min-width: 20px;
			}

			.product-details {
				margin-left: 4px;

				strong {
					margin-bottom: 4px;
					display: block;
				}

				span {
					font-size: 14px;
					color: #666;
				}
			}
		}

	}

	.total {
		margin-top: 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		span {
			font-weight: 500;
			opacity: 0.8;
			font-size: 14px;
		}

		strong {
			font-size: 16px;
		}
	}
`

export const Actions = styled.footer`
	display: flex;
	flex-direction: column;
	margin-top: 32px;

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.primary {
		background-color: #333;
		color: #fff;
		border-radius: 48px;
		border: none;
		padding: 12px 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		margin-top: 32px;
	}

	.secondary {
		padding: 12px 24px;
		color: #d73035;
		font-weight: bold;
		border: none;
		background-color: transparent;
		margin-top: 12px;
	}
`
