import React from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import productMain from '@images/product-detail-main.png';
import { toast } from 'react-toastify';

import '../admin.scss';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const EditCampaign = () => {
    const product = location?.state?.product || {};
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Helmet>
                <title>User Management | ReRaiseIt</title>
            </Helmet>
            <div className="usermanage-main">
                <div className="user-manag-chat">
                    <h6 className="text-green">Campaign Detail</h6>
                    <Row>
                        <Col xs={8} className="mb-2 detail-page">
                            <div className="d-flex location my-3 align-items-center">
                                <div>
                                    <h4>{product.description}</h4>
                                    <p>Classy and stylish all the time</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={5} className="user-tabs-btn mb-2">
                            <div className="d-flex">
                                <img src={productMain} alt={'Product image'} width="100%" />
                            </div>
                        </Col>
                        <Col xs={12} sm={7} className="detail-page mb-2">
                            <div className="product-detail-body">
                                <div className="product-description">
                                    <h4>Description</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum soluta quasi ad, consectetur distinctio voluptatem optio doloremque omnis eos fuga! Qui, sunt
                                        iure! Minima perferendis nulla quos officiis dicta molestias! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum soluta quasi ad, consectetur
                                        distinctio voluptatem optio doloremque omnis eos fuga! Qui, sunt iure! Minima perferendis nulla quos officiis dicta molestias!"
                                    </p>
                                    <br />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum soluta quasi ad, consectetur distinctio voluptatem optio doloremque omnis eos fuga! Qui, sunt
                                        iure! Minima perferendis nulla quos officiis dicta molestias! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum soluta quasi ad, consectetur
                                        distinctio voluptatem optio doloremque omnis eos fuga! Qui, sunt iure! Minima perferendis nulla quos officiis dicta molestias!"
                                    </p>
                                </div>
                                <hr />
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <p>
                            Cause Link: <a href="#">https://www.youtube.com/</a>
                        </p>
                        <p>
                            Objective Amount:: <a href="#">$200k</a>
                        </p>
                        <p>
                            Campaign Start Date:: <a href="#">.....</a>
                        </p>
                        <p>
                            Campaign End Date:: <a href="#">.....</a>
                        </p>
                    </div>
                    <div className="edit-campaign-btn text-end">
                        <span>
                            <Button
                                label="Deny"
                                icon="pi pi-times"
                                iconPos="left"
                                className="mx-2"
                                onClick={() => {
                                    toast.success('Denied');
                                    navigate(-1);
                                }}
                            />
                            <Button
                                label="Approve"
                                icon="pi pi-check"
                                iconPos="right"
                                className="approve"
                                onClick={() => {
                                    toast.success('Approved');
                                    navigate(-1);
                                }}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EditCampaign;
