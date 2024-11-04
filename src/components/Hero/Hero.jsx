import React, { useState } from 'react';
import './hero.scss';
import { Container } from 'react-bootstrap';
import AuthModal from '../Auth/AuthModal';

const Hero = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [authuser, setAuthUser] = useState('');

    const handleLoginModal = (user) => {
        setShowLoginModal(!showLoginModal);
        setAuthUser(user);
    };
    return (
        <>
            <div className="hero-bg">
                <Container className="hero-section">
                    <h3>Give hope for Unfortunates</h3>
                    <h1>Helping each other can make world better</h1>
                    <p>We seek out world changers and difference makers around the globe,and equip them to fulfill their unique purpose.</p>
                    <div className="btn-container">
                        <button type="button" onClick={handleLoginModal}>
                            Browse Listings
                        </button>
                        <button type="button" onClick={handleLoginModal}>
                            List Your Items
                        </button>
                        <button type="button" onClick={handleLoginModal}>
                            {' '}
                            Start A cause
                        </button>
                    </div>
                </Container>
            </div>
            {showLoginModal && <AuthModal setShowLoginModal={setShowLoginModal} authuser={authuser} showLoginModal={showLoginModal} handleLoginModal={handleLoginModal} />}
        </>
    );
};

export default Hero;
