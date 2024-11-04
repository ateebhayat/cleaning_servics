import React from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import productMain from '@images/product-detail-main.png';
import '../seller.scss';
import shoes from '@images/shoes.png';
import phone from '@images/phone.png';
import mvpIcon from '@icons/mostvalued.svg';
import expenseIcon from '@icons/expenses.svg';
import locator from '@icons/locator.png';
import { useLocation } from 'react-router-dom';

import { Star } from '@components/Icons/icons';

const SingleProduct = () => {
    const location = useLocation();

    const product = location?.state?.product || {};

    const images = [
        {
            id: 1,
            img: productMain
        },
        {
            id: 2,
            img: phone
        },
        {
            id: 3,
            img: mvpIcon
        },
        {
            id: 4,
            img: productMain
        },
        {
            id: 5,
            img: expenseIcon
        },
        {
            id: 6,
            img: shoes
        }
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>Single Product | ReRaiseIt</title>
            </Helmet>
            <div className="usermanage-main">
                <div className="user-manag-chat">
                    <h6 className="text-green">Active Product</h6>
                    <Row>
                        <Col xs={12} md={5} className="user-tabs-btn mb-2 detail-page">
                            <div className="d-flex location my-3 align-items-center">
                                <img src={product.img} alt={product.description} width="100%" />
                                <div>
                                    <h4>{product.description}</h4>
                                    <p>Classy and stylish all the time</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="detail-yellow-card my-3">
                                <Star />

                                <span>Accociated with: Medical Compaign</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={5} className="user-tabs-btn mb-2">
                            <Carousel thumbWidth={100} showStatus={false} showArrows={true} showIndicators={false} swipeable={true} autoPlay={false} renderThumbs={(children) => children}>
                                {images.map((img, index) => (
                                    <div key={index} className="d-flex">
                                        <img src={img.img} alt={`Product image ${index}`} />
                                    </div>
                                ))}
                            </Carousel>
                        </Col>
                        <Col xs={12} sm={6} className="detail-page mb-2">
                            <div className="product-detail-header">
                                <h1>
                                    {product.ObjectiveAmount} <span className="ms-4 days-ago">2 Days ago</span>
                                </h1>
                                <hr />
                            </div>

                            <div className="product-detail-body">
                                <div className="product-description">
                                    <h4>Description</h4>
                                    <p>
                                        {product.description}
                                        Lorem ipsum dolor sit amet consectetur adipisic
                                    </p>
                                    <p className="mt-2">
                                        Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic
                                    </p>
                                </div>
                                <hr />

                                <div className="d-flex location my-3 align-items-center">
                                    <img src={locator} alt={product.description} width="30" />
                                    <div>
                                        <p>
                                            {product.description}
                                            Lorem ipsum dolor sit amet consectetur amet consectetur adipisic
                                        </p>
                                    </div>
                                </div>
                                <hr />

                                <div className="seller-info">
                                    <h4>Seller info:</h4>
                                    <p>
                                        <a href="tel:+12131324235">
                                            {' '}
                                            Phone#: <span>+12131324235</span>
                                        </a>
                                    </p>
                                    <p>
                                        <a href="mailto:Robert@gmail.com">
                                            Email Address#: <span>Robert@gmail.com</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SingleProduct;
