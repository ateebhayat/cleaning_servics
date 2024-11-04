import React from 'react';
import './popular.scss';

import { Col, Row } from 'react-bootstrap';
import { Next, Prev, RightArrow } from '../Icons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../../../node_modules/swiper/swiper.scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Bar from '../Bar/Bar';
import CampaignsCard from '../Campigns/CampaignsCard';
import { useNavigate } from 'react-router-dom';
import { campaigns } from '../../pages/Data/data';
const Popular = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="container-popular">
                <Bar content={'Our Campaigns'} />
                <div className="d-flex align-items-center justify-content-between">
                    <p>Find our popular Campaigns and donate them</p>
                    <div className="navigation d-flex">
                        <a className="swiper-button-back">
                            <Prev />
                        </a>

                        <a className="swiper-button-forward">
                            <Next />
                        </a>
                    </div>
                </div>

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
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },
                            1680: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            1920: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            }
                        }}
                        navigation={{
                            nextEl: '.swiper-button-forward',
                            prevEl: '.swiper-button-back'
                        }}
                        slidesPerView={3.5}
                        spaceBetween={30}
                        modules={[Navigation]}
                    >
                        {campaigns.map((campaign) => (
                            <Col lg={6} xl={3} md={6} sm={12} key={campaign.id} className="my-5">
                                <SwiperSlide>
                                    <CampaignsCard campaign={campaign} />
                                </SwiperSlide>
                            </Col>
                        ))}
                    </Swiper>
                </Row>
                <div className="see-all-btn">
                    <button type="button" onClick={() => navigate('/campaigns')}>
                        See All Campaigns
                        <span className="arrow-icon">
                            <RightArrow />
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Popular;
