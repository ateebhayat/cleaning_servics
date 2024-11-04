import React, { useEffect } from 'react';

import './productsmanagement.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '../../../components/Card/Card';
import ProductDetailComponent from '../../../components/Products/ProductDetailComponent';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import cross from '@icons/cross.svg';
import bin from '@icons/bin.svg';
import tick from '@icons/tick.svg';
import { scrollFunctions } from '../../../utils/common';

const ProductDetail = () => {
    const location = useLocation();
    const status = location.state?.status || '';
    useEffect(() => {
        scrollFunctions();
    }, [location.pathname]);

    return (
        <div className="prod-detail-wrapper ">
            <Container>
                <Card>
                    <div className="card-prod-component">
                        <ProductDetailComponent status={status} />
                    </div>
                    {status !== 'active' && (
                        <div className="py-5 ">
                            <hr />
                            <div className="d-flex justify-content-end px-3 action-btn">
                                <button type="button">
                                    {status === 'pending' ? <img src={cross} alt="delete icon" className="cursor-pointer" /> : <img src={bin} alt="delete icon" className="cursor-pointer" />}
                                    {status === 'pending' ? 'Deny' : 'Delete'}
                                </button>
                                <button type="button">
                                    <img src={tick} alt="delete icon" className="cursor-pointer" />
                                    {status === 'pending' ? 'Approve' : 'Sustain'}
                                </button>
                            </div>
                        </div>
                    )}
                </Card>
            </Container>
        </div>
    );
};

export default ProductDetail;
