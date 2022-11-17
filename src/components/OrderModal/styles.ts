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
			border: none;
			background: transparent;
			display: flex;
		}
	}

`
