import React, { useEffect, useState } from 'react';
import Hero from '@components/Hero/Hero';
import { Col, Container, Row } from 'react-bootstrap';
import Popular from '@components/Popular/Popular';
import './landingpage.scss';
import welcome from '@images/welcome.png';
import Bar from '@components/Bar/Bar';
import { OurMission, OurVision, Discover } from '@components/Icons/icons';
import Card from '@components/Products/ProductCard';
import { RightArrow } from '@components/Icons/icons';
import { useNavigate } from 'react-router-dom';
import { ProductsData } from '../Data/data';
import { scrollFunctions } from '../../utils/common';

const LandingPage = () => {
    useEffect(() => {
        scrollFunctions();
    }, [location.pathname]);
    const [productSlice, setProductsToShow] = useState(8);

    useEffect(() => {
        const handleResize = () => {
            // Adjust the number of products to show based on the window width
            if (window.innerWidth < 500) {
                setProductsToShow(2);
            } else {
                setProductsToShow(8);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navigate = useNavigate();

    return (
        <div className="page-bg">
            <Hero />
            {/*  */}
            <Container>
                <Popular />
            </Container>

            {/* Welcome to Re Raise section */}
            <div className="bg-white">
                <div className="welcome-section ">
                    <Container className="content-container">
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <Bar content={'Welcome To Reraiseit '} />
                                <h4 className="content-heading">Let Us Come Together To Make a Difference</h4>
                                <p className="content">
                                    At ReRaiseIt, we envision a purpose-driven platform where generosity meets commerce. Our unique charity-centric eCommerce hub empowers sellers to donate high-value
                                    items.
                                </p>
                                <div className="d-flex mb-5 wrap-misson">
                                    <div
                                        className="d-flex flex-column  box  "
                                        style={{
                                            marginRight: 15
                                        }}
                                    >
                                        <div className="d-flex align-items-center mb-4">
                                            <OurMission />
                                            <span className="meta-heading">Our Mission</span>
                                        </div>
                                        <p className="meta-text">At ReRaiseIt, our mission is to revolutionize charitable giving by merging...</p>
                                    </div>
                                    <div className="d-flex  flex-column  box ">
                                        <div className="d-flex align-items-center mb-4">
                                            <OurVision />
                                            <span className="meta-heading">Our Vision</span>
                                        </div>
                                        <p className="meta-text">Our vision at ReRaiseIt is to redefine the way charitable donations occur...</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center discover-btn">
                                    <button type="button" onClick={() => navigate('/about-us')}>
                                        <Discover />
                                        <span
                                            style={{
                                                marginLeft: 10
                                            }}
                                        >
                                            {' '}
                                            Discover More
                                        </span>
                                    </button>
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <img src={welcome} alt="Welcome-Img" className="welcome-img" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            {/* Top Products Section */}
            <div className="recent-products">
                <Container>
                    <Bar content={'Products'} />
                    <h4 className="recently">Recently Uploaded products in various Campaigns</h4>
                    <Row>
                        {ProductsData.slice(0, productSlice).map((product) => (
                            <Col lg={4} xl={3} md={6} sm={12} key={product.id}>
                                <Card product={product} />
                            </Col>
                        ))}
                    </Row>
                    <div className="see-all-btn">
                        <button type="button" onClick={() => navigate('/products')}>
                            See All Products
                            <span className="arrow-icon">
                                <RightArrow />
                            </span>
                        </button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default LandingPage;
