import { Navbar, Nav } from 'react-bootstrap'
import logo from './logo.png'

import { NavLink, Link } from 'react-router-dom'

import AuthService from './../../../service/auth.service'

const Navigation = ({ storeUser, loggedUser }) => {

    const authService = new AuthService()

    const logoutUser = () => {

        authService
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log(err))
    }

    return (
        <Navbar bg="dark" variant="dark" expand="md" style={{ marginBottom: 30 }}>
            <Link to="/">
                <Navbar.Brand> <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}Coasters Fever</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink to="/" exact>
                        <Nav.Link as="span">Inicio</Nav.Link>
                    </NavLink>
                    <NavLink to="/listado-montañas">
                        <Nav.Link as="span">Listado</Nav.Link>
                    </NavLink>

                    {
                        loggedUser
                            ?
                            <Nav.Link as="span" onClick={() => logoutUser()}>Cerrar sesión</Nav.Link>
                            :
                            <>
                                <NavLink to="/registro">
                                    <Nav.Link as="span">Registro</Nav.Link>
                                </NavLink>
                                <NavLink to="/inicio-sesión">
                                    <Nav.Link as="span">Inicio sesión</Nav.Link>
                                </NavLink>
                            </>
                    }

                    <NavLink to="/perfil">
                        <Nav.Link as="span">Bienvenid@, {loggedUser ? loggedUser.username : 'invitado'}</Nav.Link>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation