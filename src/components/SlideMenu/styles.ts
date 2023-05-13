import styled from "styled-components";

export const Container = styled.ul`
	padding: 20px;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.166);
	position: absolute;
	width: 500px;
	top: 198px;
	left: 0;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.166);
	transition: left .3s ease-in-out;

	animation: slideleft 0.5s;

	@keyframes slideleft {
		from{
				opacity: 0;
				visibility: hidden;
				transform: translateX(-100px);
		}
		to {
				opacity: 1;
				visibility: visible;
				transform: translateX(0);
		}
	}
`
