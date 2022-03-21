import React, { useContext } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './store/auth-context';
import SearchBar from './components/common/searchBar';
import './styles/HomeNavbar.css';
import logo from './images/logo.png';

function HomeNavbar(props) {
    const authCtx = useContext(AuthContext);

    return (
        <div>
            <Navbar expand="md" className="home-navbar navbar-light bg-light">
                <Container>
                    <Navbar.Brand className="home-navbar-brand ">
                        <NavLink to="/" className="navlink-logo">
                            <img src={logo} alt="logo" className="home-logo"></img>
                            Foodistan
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Item className='home-header-items nav-search-bar'>
                                <SearchBar />
                            </Nav.Item>
                            <Nav.Item className="home-header-items ">
                                <NavLink to="/explore" className="" activeClassName="selected">
                                Explore{' '}
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item className="home-header-items">
                                <NavLink activeClassName="selected" to="/about" className="">
                                {' '}
                                About Us
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item className="home-header-items ">
                                <NavLink to="/Blogs" className="" activeClassName="selected">
                                Blogs
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item className="home-header-items">
                                <Link to="/become-our-patner" className="">
                                Become our patner
                                </Link>
                            </Nav.Item>
                            {!authCtx.isLoggedIn && (
                                <Nav.Item className="">
                                <Link to="/login">
                                    <Button
                                    type="button"
                                    variant="warning"
                                    size="lg"
                                    className="home-btnn"
                                    >
                                    Login/Sign Up
                                    </Button>
                                </Link>{' '}
                                </Nav.Item>
                            )}
                            {authCtx.isLoggedIn && (
                                <Nav.Item className="">
                                <Button
                                    type="button"
                                    variant="warning"
                                    size="lg"
                                    className="home-btnn"
                                    onClick={authCtx.logout}
                                >
                                    Logout
                                </Button>
                                </Nav.Item>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default HomeNavbar;