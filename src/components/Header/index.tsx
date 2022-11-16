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
			</Content>

			<img src={logo} alt="Logo WaiterApp" />
		</Container>
	)
}

export default Header
