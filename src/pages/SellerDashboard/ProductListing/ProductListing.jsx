import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ProgressBar } from 'primereact/progressbar';
import { Row, Col, Button } from 'react-bootstrap';
import search from '@images/search.svg';
import Form from 'react-bootstrap/Form';
import '../seller.scss';

import { Products } from './Data';
import { useNavigate } from 'react-router-dom';

const ProductListing = () => {
    const [searchText, setSearchText] = useState('');
    const [dataTab, setDataTab] = useState('Compaigns');
    const [small, setSmall] = useState(false);

    const navigate = useNavigate();

    function progressValue(amount) {
        const percentage = parseFloat(amount.replace('$', '').replace('K', '')) / 100;
        return percentage;
    }
    useEffect(() => {
        const handleResize = () => {
            // Adjust the number of products to show based on the window width
            if (window.innerWidth > 1550) {
                setSmall(true);
            } else {
                setSmall(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <React.Fragment>
            <Helmet>
                <title>Product Listng | ReRaiseIt</title>
            </Helmet>
            <div className="usermanage-main">
                <div className="user-tabs-btn mb-4">
                    <Button className={dataTab === 'Compaigns' && 'activetbtn'} onClick={() => setDataTab('Compaigns')}>
                        Active
                    </Button>
                    <Button className={dataTab === 'pending' && 'activetbtn'} style={{ position: 'relative' }} onClick={() => setDataTab('pending')}>
                        Pending Products <span className="unreadcompaigns">05</span>
                    </Button>
                </div>
                <div className="user-manag-chat">
                    <Row>
                        <Col xs={12} md={3} sm={6} lg={4} xl={7} className="user-tabs-btn mb-2">
                            <div className="request-section d-flex justify-content-between">
                                <div>
                                    <h2>My Products</h2>
                                    <p>{dataTab === 'pending' ? 'Pending for approval' : 'Published Products'}</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={5} sm={6} lg={4} xl={3} className="user-tabs-btn spacer-tabs  ">
                            <div className="userlisting" style={{ position: 'relative' }}>
                                <Form.Control
                                    value={searchText}
                                    onChange={(e) => {
                                        setSearchText(e.target.value);
                                    }}
                                    placeholder="Search"
                                    className="search-input w-full"
                                />
                                <img src={search} alt="search icon" className="px-2 cursor-pointer" />
                            </div>
                        </Col>
                        <Col xs={12} md={4} sm={6} lg={4} xl={2} className="add-btn spacer-tabs">
                            <button type="button" onClick={() => navigate('/adpost')}>
                                Add New Product
                            </button>
                        </Col>
                    </Row>
                    <div className="productListing">
                        <Row>
                            {Products.map((product, i) => (
                                <Col
                                    xs={6}
                                    sm={4}
                                    lg={3}
                                    xl={small ? 2 : 3}
                                    key={i}
                                    className="product-cards "
                                    id={dataTab === 'pending' && 'pending'}
                                    onClick={() => navigate(`/product_listing/${product?.id}`, { state: { product: product } })}
                                >
                                    <div>
                                        <img alt={product.description} src={product.img} style={{ width: '100%' }} />
                                        <div className="product-content">
                                            <p>{product.FundraiserName}</p>
                                            <p className="price">{product.ObjectiveAmount}</p>
                                            <p className="description">{product.description}</p>

                                            <Button className="comapaignname">{product.CompaignName}</Button>
                                            <p className="description">{product.description}</p>

                                            <ProgressBar color="#4ca94c" value={progressValue(product.ObjectiveAmount)} showValue={false}></ProgressBar>
                                            <Button className="published">Status: {dataTab === 'pending' ? 'Pending' : 'Published'}</Button>
                                        </div>{' '}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductListing;
