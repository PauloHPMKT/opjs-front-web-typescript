import { useState } from 'react'
import { Container, Content } from './styles'
import { GoThreeBars } from 'react-icons/go'
import { createUseStyles } from 'react-jss'

import logo from '../../assets/images/logo.svg'
import SlideMenu from '../SlideMenu'

const useStyles = createUseStyles({
	barsConfig: {
		color: '#fff',
		fontSize: 30,
		margin: '0 40px',
		cursor: 'pointer'
	},
	setMenu: {
		position: 'absolute',
		top: '198px',
		boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.166)',
		Transition: 'left .3s ease-in-out',
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
			<Content>
				<div className="page-details">
					<h1>Pedidos</h1>
					<h2>Acompanhe os pedidos dos clientes</h2>
				</div>
				<img src={logo} alt="Logo WaiterApp" />
			</Content>
			<div className={classes.setMenu}>
				<SlideMenu />
			</div>
		</Container>
	)
}

export default Header
