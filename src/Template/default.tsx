import { ReactElement, ReactNode } from "react";
import Header from "../components/Header";

interface layoutProps {
	children: ReactNode | ReactElement | JSX.Element;
}

export const Layout = ({ children }: layoutProps) => {
	return (
		<>
			<Header />
			{ children }
		</>
	);
}
