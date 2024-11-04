import React from 'react';
// import brand1 from '@images/1.png';
// import brand2 from '@images/2.png';

// import brand3 from '@images/3.png';

// import brand4 from '@images/4.png';

import { Col, Container, Row } from 'react-bootstrap';
import { Next, Prev } from '../Icons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Card from '@components/Products/ProductCard';

import '../../../node_modules/swiper/swiper.scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './similarproducts.scss';
const SimilarProducts = ({ products, title = 'Similar Items You Might Also Like' }) => {
    return (
        <>
            <div className="py-3  similar-products">
                <div className="d-flex align-items-center justify-content-between">
                    <h4> {title}</h4>
                    <div className="navigation d-flex">
                        <a className="swiper-button-prev-custom">
                            <Prev />
                        </a>

                        <a className="swiper-button-next-custom">
                            <Next />
                        </a>
                    </div>
                </div>

                <Container fluid>
                    <Row>
                        <Swiper
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 10
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                },
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                },
                                1680: {
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                },
                                1920: {
                                    slidesPerView: 5,
                                    spaceBetween: 10
                                }
                            }}
                            modules={[Navigation]}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            navigation={{
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom'
                            }}
                        >
                            {products.map((product) => (
                                <>
                                    <SwiperSlide key={product.id}>
                                        <Col>
                                            <Card product={product} />
                                        </Col>
                                    </SwiperSlide>
                                </>
                            ))}
                        </Swiper>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default SimilarProducts;
