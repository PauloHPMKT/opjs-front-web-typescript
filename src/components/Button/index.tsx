import React from "react";
import { ButtonAction } from "./styles";

interface buttonProps {
	children: string;
	handleClickEvent: (e: MouseEvent) => void;
}

export const Button = ({ children, handleClickEvent }: buttonProps) => {
	return (
		<ButtonAction onClick={handleClickEvent}>
			{ children }
		</ButtonAction>
	);
}
