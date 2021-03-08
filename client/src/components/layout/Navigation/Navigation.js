import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from './logo.png'
import { NavLink, Link } from 'react-router-dom'
import AuthService from './../../../service/auth.service'
import './Navigation.css'

const Navigation = ({ storeUser, loggedUser, isAdmin }) => {

    const authService = new AuthService()

    const logoutUser = () => {

        authService
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log(err))
    }

    return (
        <Navbar variant="light" expand="md" className="navb" fixed="top">
            <Link to="/">
                <Navbar.Brand> <img
                    alt="logo"
                    src={logo}
                    width="28"
                    height="28"
                    className="d-inline-block align-top"
                />{' '} </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">

                    <NavLink to="/continents" >
                        <Nav.Link as="span">Search</Nav.Link>
                    </NavLink>

                    {
                        loggedUser
                            ?


                            isAdmin === 'admin' ?
                                <>
                                    <NavDropdown title="Private" id="basic-nav-dropdown">
                                        <NavDropdown.Item > <Link to="/profile">Profile</Link></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item ><Link to="/admin-page">Admin page</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as="span" onClick={() => logoutUser()}>Log out</Nav.Link>

                                </>
                                :
                                <>
                                    <NavLink to="/profile">
                                        <Nav.Link as="span">Profile</Nav.Link>
                                    </NavLink>
                                    <Nav.Link as="span" onClick={() => logoutUser()}>Log out</Nav.Link>


                                </>

                            :
                            <>
                                <NavLink to="/login">
                                    <Nav.Link as="span">Log in</Nav.Link>
                                </NavLink>
                                <NavLink to="/signup">
                                    <Nav.Link as="span">Sign up</Nav.Link>
                                </NavLink>

                            </>
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation