import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'

import { App } from './App'
import { LoginView } from './pages/LoginView';
import { Dashboard } from './pages/Dashboard';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
			{
				path: "login",
				element: <LoginView />,
			},
		]
	},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
