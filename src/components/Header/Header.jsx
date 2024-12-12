/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import logo from '@public/fk-logo.png';
import './header.scss';
import { Navbar } from 'react-bootstrap';
import { PersonIcon } from '../Icons/icons';
import AuthModal from '../Auth/AuthModal';
import _ from 'lodash';
import { Button } from '@mui/material';
const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
          <Navbar.Brand
            href="/"
            className="nav-brand"
            // @TODO id={ scrolled && 'headerscrolled' }
          >
            Cleaning Services
            {/* @TODO */}
          </Navbar.Brand>
          {!small && (
            <div className="login-buttons">
              <Button type="button" className="login-btn" onClick={() => handleLoginModal('Fundraiser')}>
                <PersonIcon />
                <span className="login-text">Sign up to Cleaning!</span>
              </Button>
              <Button type="button" className="login-btn" onClick={() => handleLoginModal('Login')}>
                <PersonIcon />
                <span className="login-text">Business Login</span>
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>
      <Navbar.Brand href="#home" className="logo-mobile">
        <img src={logo} alt="app-logo" />
      </Navbar.Brand>
      {showLoginModal && (
        <AuthModal setShowLoginModal={setShowLoginModal} authuser={authuser} showLoginModal={showLoginModal} handleLoginModal={handleLoginModal} />
      )}
    </>
  );
};

export default Header;
