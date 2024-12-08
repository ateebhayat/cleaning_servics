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
                    {/* <h3>Give hope for Unfortunates</h3> */}
                    <h1>The Loyalty Card your customers will actually use</h1>
                    <p>
                    Getting Customers to return to your business can be an impossible task. FLIKCLUB Loyalty is the app that incentivises one-time buyers to become customers for life.


                    </p>
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
