import {useState} from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from './logoblack.png'
import logowhite from './logowhite.png'
import { NavLink, Link } from 'react-router-dom'
import AuthService from './../../../service/auth.service'
import './Navigation.css'


const Navigation = ({ storeUser, loggedUser, isAdmin }) => {

    const [changeClass, setChangeClass] = useState(false)

    const authService = new AuthService()
    document.addEventListener('scroll', (e)=> scrollNav(e))
    const logoutUser = () => {

        authService
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log(err))
    }
// to do

function scrollNav(e){
    const scrollTop = window.pageYOffset
    console.log(window.pageYOffset)
    if(scrollTop > 70)  setChangeClass(true) 
    else if(scrollTop === 0) setChangeClass(false)
}
    return (
        <Navbar id="navbar" variant="light" expand="md" className={changeClass? "navb filled":"navb"} fixed="top" >
            <Link to="/" >
                <Navbar.Brand> <img
                    alt="logo"
                    src={changeClass? logo:logowhite}
                    width="40"
                    height="40"
                    style={{marginLeft:15}}
                    className="d-inline-block align-top"
                />{' '} </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">

                    <NavLink to="/continents" >
                        <Nav.Link as="span"className={changeClass? "navb filled":"link-color"}>Search</Nav.Link>
                    </NavLink>

                    {
                        loggedUser
                            ?


                            isAdmin === 'admin' ?
                                <>
                                    <NavDropdown title="Private" id="basic-nav-dropdown">
                                        <NavDropdown.Item > <Link to="/profile"className={changeClass? "navb filled":"link-color"} >Profile</Link></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item ><Link to="/admin-page"className={changeClass? "navb filled":"link-color"}>Admin page</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as="span"className={changeClass? "navb filled":"link-color"} onClick={() => logoutUser()}>Log out</Nav.Link>

                                </>
                                :
                                <>
                                    <NavLink to="/profile">
                                        <Nav.Link as="span"className={changeClass? "navb filled":"link-color"}>Profile</Nav.Link>
                                    </NavLink>
                                    <Nav.Link as="span" className={changeClass? "navb filled":"link-color"}onClick={() => logoutUser()}>Log out</Nav.Link>


                                </>

                            :
                            <>
                                <NavLink to="/login">
                                    <Nav.Link as="span"className={changeClass? "navb filled":"link-color"}>Log in</Nav.Link>
                                </NavLink>
                                <NavLink to="/signup">
                                    <Nav.Link as="span"className={changeClass? "navb filled":"link-color"}>Sign up</Nav.Link>
                                </NavLink>

                            </>
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation