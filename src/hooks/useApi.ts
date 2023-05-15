import axios from "axios";
const BASE_URL = import.meta.env.REACT_APP_API;

const api = axios.create({
	baseURL: BASE_URL,
})

export const useApi = () => ({
	validateToken: async (token: string) => {
		const response = await api.post("/validate", token);
		return response.data;
	},
	signin: async (email: string, password: string) => {
		// resposta false até a implementação da api
		return {
			user: { id: 'Rf411assd856d12cvbg56', name: 'Paulo Sergio', email:'paulo@teste.com.br' },
			token: '123456789'
		}
		const response = await api.post("/signin", { email, password });

		return response.data;
	},
	logout: async () => {
		const response = await api.post("/logout");
		return response.data;
	}
})
