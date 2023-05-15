import { ReactElement, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { LoginView } from "../../pages/LoginView";

interface childrenProps {
	children: JSX.Element | ReactElement;
}

export const RequireAuth = ({ children }: childrenProps) => {
	const auth = useContext(AuthContext);

	if (!auth.user) {
		return <LoginView />;
	}

	return <>{ children }</>;
}
