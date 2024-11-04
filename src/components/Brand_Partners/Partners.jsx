import React from 'react';
import brand1 from '@images/1.png';
import brand2 from '@images/2.png';

import brand3 from '@images/3.png';

import brand4 from '@images/4.png';

import { Col, Container, Row } from 'react-bootstrap';
import { Next, Prev } from '../Icons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import '../../../node_modules/swiper/swiper.scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './partner.scss';
const BrandPartners = () => {
    const partnerImages = [
        {
            id: 4,
            image: brand4
        },
        {
            id: 2,
            image: brand2
        },
        {
            id: 1,
            image: brand1
        },

        {
            id: 3,
            image: brand3
        },

        {
            id: 1,
            image: brand1
        },
        {
            id: 2,
            image: brand2
        },
        {
            id: 3,
            image: brand3
        },
        {
            id: 4,
            image: brand4
        }
    ];
    return (
        <>
            <div className="bg-white d-flex align-items-center justify-content-center py-4 partner">
                <Container>
                    <Row>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                375: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                425: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10
                                },
                                1024: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20
                                },
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                }
                            }}
                            slidesPerView={4}
                            spaceBetween={10}
                            modules={[Navigation]}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            navigation={{
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom'
                            }}
                        >
                            {partnerImages.map((partnerImage) => (
                                <>
                                    <SwiperSlide key={partnerImage.id}>
                                        <Col lg={6} xl={3} md={6} sm={12} className="">
                                            <img src={partnerImage.image} alt={`Brand ${partnerImage.id}`} />
                                        </Col>
                                    </SwiperSlide>
                                </>
                            ))}
                            <div className="swiper-button-prev-custom">
                                <span>
                                    <Prev />
                                </span>
                            </div>
                            <div className="swiper-button-next-custom">
                                <span>
                                    <Next />
                                </span>
                            </div>
                        </Swiper>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default BrandPartners;
