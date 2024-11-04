import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '@images/about.png';
import './about.scss';
import { OurMissionLg, OurVisionLg } from '@components/Icons/icons';
import Banner from '@components/Banner/Banner';
import { scrollFunctions } from '../../utils/common';

const About = () => {
    useEffect(() => {
        scrollFunctions();
    }, [location.pathname]);
    return (
        <div
            style={{
                background: '#fff'
            }}
        >
            <div className="effect-box">
                <Banner title="About" description="Elevate Generosity, Empower Change" />
                <Container className="about-container">
                    <Row>
                        <Col lg={12} sm={12}>
                            <h1 className="heading-about">Let Us Come Together To Make a Difference</h1>
                            <p className="content-about">
                                At ReRaiseIt, we envision a purpose-driven platform where generosity meets commerce. Our unique charity-centric eCommerce hub empowers sellers to donate high-value
                                items, fostering a community dedicated to making meaningful contributions through every sale. Join us in reshaping charity through commerce.
                            </p>
                        </Col>
                        <Col md={12} lg={12}>
                            <img src={aboutImg} />
                        </Col>
                        <Col
                            lg={6}
                            md={12}
                            sm={12}
                            style={{
                                display: 'table'
                            }}
                        >
                            <div className="d-flex flex-column mission">
                                <div className="d-flex align-items-center mb-5">
                                    <span className="mr-4">
                                        <OurMissionLg />
                                    </span>
                                    <h3> Our Mission</h3>
                                </div>
                                <p>
                                    At ReRaiseIt, our mission is to revolutionize charitable giving by merging commerce and compassion. We strive to provide a seamless platform where sellers can
                                    effortlessly contribute to meaningful causes through the sale of valuable items. We aim to create a community-driven ecosystem that transforms everyday transactions
                                    into impactful philanthropy, fostering a world where generosity thrives.
                                </p>
                            </div>
                        </Col>
                        <Col
                            lg={6}
                            md={12}
                            sm={12}
                            style={{
                                display: 'table'
                            }}
                        >
                            <div className="d-flex flex-column mission">
                                <div className="d-flex align-items-center jsutify-content-center mb-5">
                                    <span className="mr-3">
                                        <OurVisionLg />
                                    </span>
                                    <h3 className="ml-4"> Our Vision</h3>
                                </div>
                                <p>
                                    Our vision at ReRaiseIt is to redefine the way charitable donations occur, making it an inherent part of everyday commerce. We envision a future where each
                                    transaction on our platform fuels positive change, where sellers and buyers unite in a shared purpose of supporting causes that matter. Through our innovative
                                    approach, we aspire to create a global movement where giving back is effortless and ingrained in every sale, fostering a world where generosity knows no bounds.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;
