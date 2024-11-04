import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductsData } from '../Data/data';
import Card from '@components/Products/ProductCard';
import Bar from '@components/Bar/Bar';
import './savedproducts.scss';
const SavedProducts = () => {
    return (
        <div className="effect-box">
            <Container className="saved-products ">
                <Bar content={'Saved Products'} />
                <Row>
                    {ProductsData.map((product) => (
                        <Col lg={4} xl={3} md={6} sm={12} key={product.id}>
                            <Card product={product} clickable={false} bookmarkIcon={true} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default SavedProducts;
