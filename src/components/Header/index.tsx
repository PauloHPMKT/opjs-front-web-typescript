import { useState } from 'react'
import { Container, Content } from './styles'
import { GoThreeBars } from 'react-icons/go'
import { createUseStyles } from 'react-jss'

import logo from '../../assets/images/logo-foodsquare-removebg-preview.png'
import SlideMenu from '../SlideMenu'

const useStyles = createUseStyles({
	barsConfig: {
		color: '#fff',
		fontSize: 30,
		margin: '0 40px',
		cursor: 'pointer'
	},
	setMenuOpen: {
		left: 0,
		Transition: 'left .3s ease-in-out',
	},
	setMenuClose: {
		left: '-100%',
		Transition: 'left .3s ease-in-out',
	}
})

const Header = () => {
	const classes = useStyles()
	const [hiddenMenu, setHiddenMenu] = useState(false)

	const handleToggleMenu = () => {
		setHiddenMenu(!hiddenMenu)
	}

	return(
		<Container>
			<GoThreeBars onClick={handleToggleMenu} className={classes.barsConfig} />
			{
				hiddenMenu && <SlideMenu />
			}
			<Content>
				<div className="page-details">
					<h1>Gerenciamento de Pedidos</h1>
					<h2>Acompanhe os pedidos dos clientes</h2>
				</div>
				<div className='logo-container'>
					<img src={logo} alt="Logo WaiterApp" />
				</div>
			</Content>
		</Container>
	)
}

export default Header
