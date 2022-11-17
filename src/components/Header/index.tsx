import { Container, Content } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => {
	return(
		<Container>
			<Content>
				<div className="page-details">
					<h1>Pedidos</h1>
					<h2>Acompanhe os pedidos dos clientes</h2>
				</div>
				<img src={logo} alt="Logo WaiterApp" />
			</Content>

		</Container>
	)
}

export default Header
