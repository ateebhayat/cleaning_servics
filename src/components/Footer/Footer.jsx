import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerLogo from '@images/footer-logo.png';
import './footer.scss';
import { Instagram, Twitter, Pinterest, Youtube, MasterCard, PayPal } from '@components/Icons/icons';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    // const handleNavigation = (route) => {
    //     navigate(route);
    // };
    return (
        <div className="footer text-white ">
            <Container>
                <Row className="">
                    <Col lg={3} md={6}>
                        <img src={footerLogo} className="footer-logo " onClick={() => navigate('/')} />
                        <p className="count">10K</p>
                        <p className="clients">Worldwide Client</p>
                        <p className="clients">Already Connected</p>
                    </Col>
                    <Col lg={2} md={6}>
                        <h6 className="">Quick Links</h6>
                        <div className="links-container">
                            <Link to="/">
                                <a>Home</a>
                            </Link>
                            <Link to="/about-us">
                                <a>About Us</a>
                            </Link>
                            <Link to="/campaigns">
                                <a>Campaigns</a>
                            </Link>
                            <Link to="/products">
                                <a>Products</a>
                            </Link>
                            <Link to="/wishlist">
                                <a>Wishlist</a>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={2} md={6}>
                        <h6>Get In Touch</h6>
                        <Link to="/contact-us">
                            <a>Contact Us</a>
                        </Link>
                    </Col>
                    <Col lg={2} md={6}>
                        <h6>Address</h6>
                        <a
                            style={{
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                window.open('https://maps.app.goo.gl/SzavXZDFcwKG2WC18', '_blank');
                            }}
                        >
                            2464 Royal Ln. Mesa, New Jersey 45463
                        </a>
                    </Col>
                    <Col lg={3} md={6}>
                        <h6>Follow Us</h6>
                        <div className="social">
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <Twitter />
                            </a>
                            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                                <Instagram />
                            </a>
                            <a href="https://pinterest.com/" target="_blank" rel="noreferrer">
                                {' '}
                                <Pinterest />
                            </a>
                            <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                                <Youtube />
                            </a>
                        </div>

                        <h5>We Accept</h5>
                        <div className="payment">
                            <a>
                                <MasterCard />
                            </a>
                            <a>
                                <PayPal />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
