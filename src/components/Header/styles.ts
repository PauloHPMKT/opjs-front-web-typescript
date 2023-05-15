import styled from "styled-components"

export const Container = styled.header`
	background-color: red;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 150px;
`

export const Content = styled.div`
	width: 100%;
	max-width: 1216px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 4%;

	.page-details {
		color: #fff;

		h1 {
			font-size: 32px;
		}

		h2 {
			margin-top: 6px;
			font-weight: 400;
			font-size: 16px;
			opacity: 0.9;
		}
	}

	.logo-container {
		width: 200px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 100%;
			filter: drop-shadow(0 0 2px #a3019080);
		}
	}
`
