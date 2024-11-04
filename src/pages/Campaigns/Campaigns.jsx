import React, { useEffect, useState } from 'react';
import Banner from '@components/Banner/Banner';
import PaginationComponent from '@components/Pagination/Pagination';

import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import Filters from '@components/Filters/Filters';
import CampaignsCard from '@components/Campigns/CampaignsCard';
import './campaigns.scss';
import downarrow from '@icons/downarrow.svg';

import { campaigns } from '../Data/data';
import { scrollFunctions } from '../../utils/common';

const Campaigns = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    useEffect(() => {
        scrollFunctions();
    }, [location.pathname]);
    const campaignCategory = [
        { id: 1, categoryName: 'Medical', count: 10 },
        { id: 2, categoryName: 'Shelter', count: 15 },
        { id: 3, categoryName: 'Education', count: 8 },
        { id: 4, categoryName: 'Food', count: 20 },
        { id: 5, categoryName: 'Sports', count: 20 }
    ];
    const productCategory = [
        { id: 1, categoryName: 'Accessories', count: 10 },
        { id: 2, categoryName: 'Mobile', count: 15 },
        { id: 3, categoryName: 'Clothing', count: 8 },
        { id: 4, categoryName: 'Purses', count: 20 },
        { id: 5, categoryName: 'Electronics', count: 20 }
    ];

    return (
        <div className="campaigns-page">
            <Banner title="Campaigns" description="Buy any product & make a hope for unfortunates" />
            <Container className="campaign-container-spacing">
                <Row>
                    <Col lg={4}>
                        <Filters productCategory={productCategory} campaignCategory={campaignCategory} priceToggle={false} campaignFilter={'Charity Campaigns'} />
                    </Col>
                    <Col lg={8} className="products">
                        <div className="d-flex align-items-center justify-content-between  heading-cont  ">
                            <h2>Showing 12 Results from total 230</h2>
                            <div className="recent-btn">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Recent{' '}
                                        <img
                                            src={downarrow}
                                            style={{
                                                marginLeft: '10px'
                                            }}
                                        />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <Row>
                            {campaigns.map((campaign) => (
                                <Col lg={6} xl={4} md={6} sm={12} key={campaign.id}>
                                    <div className="mb-4">
                                        <CampaignsCard campaign={campaign} />
                                    </div>
                                </Col>
                            ))}
                            {/* pagination */}
                            <PaginationComponent currentPage={currentPage} totalCount={70} onPageChange={handlePageChange} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Campaigns;
