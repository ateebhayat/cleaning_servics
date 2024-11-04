import React from 'react';
import { Container } from 'react-bootstrap';
import './banner.scss';
const Banner = ({ title, description }) => {
    return (
        <div className="banner">
            <Container>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </Container>
        </div>
    );
};

export default Banner;
