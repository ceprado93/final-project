import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from './logo_size.jpg'

import { NavLink, Link} from 'react-router-dom'
// import AuthModal from '../../shared/Modal/AuthModal'
import AuthService from './../../../service/auth.service'
import './Navigation.css'

const Navigation = ({ storeUser, loggedUser , isAdmin}) => {

    const authService = new AuthService()

    const logoutUser = () => {

        authService
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log(err))
    }

    return (
        <Navbar bg="light" variant="light" expand="md" className="navb">
            <Link to="/">
                <Navbar.Brand> <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '} Waves Map</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink to="/" exact>
                        <Nav.Link as="span">Home</Nav.Link>
                    </NavLink>
                    <NavLink to="/continents">
                        <Nav.Link as="span">Atlas</Nav.Link>
                    </NavLink>
                    <NavLink to="/waves">
                        <Nav.Link as="span">Waves</Nav.Link>
                    </NavLink>

                    {
                        loggedUser
                            ?

                            isAdmin ?
                            <>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                              </NavDropdown>
                            </>
                            :
                            <>
                                <Nav.Link as="span" onClick={() => logoutUser()}>Log out</Nav.Link>
                                <NavLink to="/profile">
                                    <Nav.Link as="span">Profile</Nav.Link>
                                </NavLink>
                            
                            </>
                            
                            :
                            <>
                                <NavLink to="/signup">
                                    <Nav.Link as="span">Sign up</Nav.Link>
                                </NavLink>
                                <NavLink to="/login">
                                    <Nav.Link as="span">Log in</Nav.Link>
                                </NavLink>
                            </>
                    }


                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation