import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

interface childrenProps {
	children: ReactNode | JSX.Element;
}

export const AuthProvider = ({ children }: childrenProps) => {
	const [user, setUser] = useState<User | null>(null);
	const api = useApi();

	// requisição para o backend
	const signin = async (email: string, password: string) => {
		const data = await api.signin(email, password);

		if (data.user && data.token) {
			setUser(data.user);
			return true;
		}
		return false;
	}

	// logout
	const signout = async () => {
		await api.logout();
		setUser(null);
	}

	return(
		<AuthContext.Provider value={{ user, signin, signout }}>
			{ children }
		</AuthContext.Provider>
	)
}
