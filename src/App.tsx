import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Outlet } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return(
		<>
			<GlobalStyles />
			<ToastContainer
				position="bottom-center"
			/>
			<Outlet />
		</>
  )
}
