import React, { useEffect, useState } from 'react';
import Banner from '@components/Banner/Banner';

import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import Filters from '@components/Filters/Filters';
import Card from '@components/Products/ProductCard';
import downarrow from '@icons/downarrow.svg';
import './products.scss';
import { ProductsData } from '../Data/data';
import PaginationComponent from '../../components/Pagination/Pagination';
import { useLocation } from 'react-router-dom';
import { scrollFunctions } from '../../utils/common';

const Products = () => {
    let location = useLocation();

    useEffect(() => {
        scrollFunctions();
    }, [location.pathname]);
    const [currentPage, setCurrentPage] = useState(1);
    const queryParams = new URLSearchParams(location?.search);
    const filter = queryParams.get('filter');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
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
        <div
            style={{
                background: 'white'
            }}
        >
            <div className="product-effect-box">
                <Banner title={filter ? `${filter} Campaign Products` : 'Products'} description="Buy any product & make a hope for unfortunates" />
                <Container
                    style={{
                        paddingTop: '2.5rem',
                        paddingBottom: '5rem'
                    }}
                    className="px-0 space-inline"
                >
                    <Row>
                        <Col lg={4}>
                            <Filters productCategory={productCategory} campaignCategory={campaignCategory} priceToggle={true} campaignFilter={'Campaigns Categories'} />
                        </Col>
                        <Col lg={8} className="products">
                            <div className="d-flex align-items-center justify-content-between  ">
                                <h3>Showing 12 Results from total 230</h3>
                                <div className="recent-btn d-flex align-items-center">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            Recent
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
                                {ProductsData.map((product) => (
                                    <Col lg={6} xl={4} md={6} sm={12} key={product.id} className="mobile-flex">
                                        <Card product={product} />
                                    </Col>
                                ))}
                                {/* pagination */}
                                <PaginationComponent currentPage={currentPage} totalCount={70} onPageChange={handlePageChange} priceToggle={true} />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Products;
