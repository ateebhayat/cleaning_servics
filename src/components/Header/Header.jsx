/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import logo from '@images/logo.jpg';
import './header.scss';
import { Nav, Navbar } from 'react-bootstrap';
import { PersonIcon, Search } from '../Icons/icons';
import AuthModal from '../Auth/AuthModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const handleSearchBar = () => setShowSearchBar(!showSearchBar);
    const [small, setSmall] = useState(false);

    const [authuser, setAuthUser] = useState('');

    const handleLoginModal = (user) => {
        setShowLoginModal(!showLoginModal);
        setAuthUser(user);
    };

    useEffect(() => {
        const handleResize = () => {
            // Adjust the number of products to show based on the window width
            if (window.innerWidth < 990) {
                setSmall(true);
            } else {
                setSmall(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleScroll = _.throttle(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }, 200);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar expand="lg" className="header" sticky="top" id={scrolled && 'headerscrolled'}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="">
                        {!showSearchBar && (
                            <>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about-us">About</Nav.Link>
                                <Nav.Link href="/campaigns">Campaigns</Nav.Link>
                                <Nav.Link href="/products">Products</Nav.Link>
                                <Nav.Link href="/wishlist">Wishlist</Nav.Link>

                                {small && (
                                    <>
                                        <Nav.Link href="/products">Browse Listings</Nav.Link>
                                        <Nav.Link href="#" onClick={() => handleLoginModal('Buy')}>
                                            List Your Items
                                        </Nav.Link>
                                        <Nav.Link href="#" onClick={() => handleLoginModal('Fundraiser')}>
                                            Start A Cause
                                        </Nav.Link>
                                        <Nav.Link href="#" onClick={() => handleLoginModal('Login')}>
                                            Login
                                        </Nav.Link>
                                    </>
                                )}
                            </>
                        )}
                        {!small && (
                            <div className={`search-bar ${showSearchBar ? 'active' : ''}`}>
                                <input type="text" placeholder="Search...." />
                                <div
                                    onClick={handleSearchBar}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    {showSearchBar ? <FontAwesomeIcon icon={faXmark} /> : <Search />}
                                </div>
                            </div>
                        )}
                    </Nav>
                    <Navbar.Brand
                        href="/"
                        className="nav-brand"
                        // @TODO id={ scrolled && 'headerscrolled' }
                    >
                        <img src={logo} alt="app-logo" />
                    </Navbar.Brand>
                    {!small && (
                        <div className="login-buttons">
                            <button className="start-btn" type="button" onClick={() => navigate('/products')}>
                                Browse Listings
                            </button>
                            <button className="start-btn" type="button" onClick={() => handleLoginModal('Fundraiser')}>
                                List Your Items
                            </button>
                            <button className="findraiser" type="button" onClick={() => handleLoginModal('Fundraiser')}>
                                Start A Cause
                            </button>
                            <button type="button" className="login-btn" onClick={() => handleLoginModal('Login')}>
                                <PersonIcon />
                                <span className="login-text"> Login</span>
                            </button>
                        </div>
                    )}
                </Navbar.Collapse>
            </Navbar>
            <Navbar.Brand href="#home" className="logo-mobile">
                <img src={logo} alt="app-logo" />
            </Navbar.Brand>
            {showLoginModal && <AuthModal setShowLoginModal={setShowLoginModal} authuser={authuser} showLoginModal={showLoginModal} handleLoginModal={handleLoginModal} />}
        </>
    );
};

export default Header;
