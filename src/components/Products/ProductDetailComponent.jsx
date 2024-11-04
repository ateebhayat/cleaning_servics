import React from 'react';
import { Col, Row } from 'react-bootstrap';
import productMain from '@images/product-detail-main.png';

import { Carousel } from 'react-responsive-carousel';
import './productdetailcomponent.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Location, Star } from '@components/Icons/icons';
import Bar from '../Bar/Bar';

const ProductDetailComponent = ({ status }) => {
    const images = [
        {
            id: 1,
            img: productMain
        },
        {
            id: 2,
            img: productMain
        },
        {
            id: 3,
            img: productMain
        },
        {
            id: 4,
            img: productMain
        }
    ];

    return (
        <div className="prod-detail-comp" id={status === 'flag' && 'flagproduct'}>
            <Bar content={status === 'pending' ? 'Product Request' : status === 'active' ? 'Active Product' : 'Flag Product'} />
            <Row className="py-2 align-items-center">
                <Col lg={6}>
                    <div className="d-flex content-img-wrapper">
                        <img src={productMain} width={70} height={70} />
                        <div className="d-flex flex-column">
                            <span className="prod-title">Apple Watch 52Mkv</span>
                            <span className="prod-desc">Classy and stylish all the time</span>
                        </div>
                    </div>
                </Col>

                <Col lg={6} className="col-spacing">
                    <div className="d-flex align-items-center justify-content-start frame">
                        <span className="star">
                            <Star />
                        </span>

                        <span className="category-content">Associated with: Medical Campaign </span>
                    </div>
                </Col>
            </Row>

            <hr />
            <Row className="detail-page-row">
                {/* Product Image Caraousal Section */}
                <Col
                    lg={6}
                    style={{
                        paddingInlineStart: '3rem'
                    }}
                >
                    <Carousel thumbWidth={76} showStatus={false} showArrows={true} showIndicators={false} swipeable={true} autoPlay={false} renderThumbs={(children) => children}>
                        {images.map((img, index) => (
                            <div key={index} className="d-flex">
                                <img src={img.img} alt={`Product image ${index}`} />
                            </div>
                        ))}
                    </Carousel>
                </Col>
                <Col lg={6} className="product-content">
                    {/* Product Price Section */}
                    <div className="d-flex align-items-center price-wrapper ">
                        <span className="price">$175.00</span>
                        <div className="date-published">
                            <span>5 days ago</span>
                        </div>
                    </div>

                    <hr />
                    {/* Product Description Section*/}
                    <div className="desc-wrapper">
                        <h4 className="desc">Description:</h4>
                        <div className="d-flex align-items-center address-container">
                            <span className="desc-content">
                                <p>
                                    {' '}
                                    The Apple Watch 52Mkv is a cutting-edge smartwatch that seamlessly blends style and functionality. Boasting a vibrant 52mm display, it offers a stunning visual
                                    experience. Packed with advanced health and fitness features,
                                </p>
                                <p>
                                    {' '}
                                    this watch keeps you connected and on top of your well-being. With its sleek design and powerful performance, the Apple Watch 52Mkv is a must-have accessory for
                                    tech enthusiasts.{' '}
                                </p>
                            </span>
                        </div>
                    </div>
                    <hr />
                    {/* Product Location Section */}
                    <div className="location-wrapper">
                        <h4 className="location">Location:</h4>
                        <div className="d-flex align-items-center address-container">
                            <span className="loc-icon">
                                <Location />
                            </span>

                            <span className="address">101 JASPER AVE SW. 25-108 CEDAR ST. SUITE 5 BIRCHMOUNT RD, Toronto, Canada</span>
                        </div>
                    </div>
                    <hr />
                    <div className="seller-wrapper">
                        <h4 className="seller-info">Seller Info:</h4>
                        <p className="desc-content">
                            <a href="tel:+12131324235">Phone # : +1 22530224556</a>
                        </p>
                        <p className="desc-content">
                            <a href="mailto:Robert225@gmail.com">Email Address : Robert225@gmail.com</a>
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProductDetailComponent;
