import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col, Button } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import productMain from '@images/product-detail-main.png';
import '../admin.scss';
import { ProgressBar } from 'primereact/progressbar';
import shoes from '@images/shoes.png';
import phone from '@images/phone.png';
import mvpIcon from '@icons/mostvalued.svg';
import expenseIcon from '@icons/expenses.svg';
import expenseIcon1 from '@icons/more-vertical.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Menu } from 'primereact/menu';

const CompaignDetail = () => {
    const product = location?.state?.product || {};
    const navigate = useNavigate();
    const [productSlice, setProductsToShow] = useState(12);
    const [small, setSmall] = useState(false);

    function progressValue(amount) {
        const percentage = parseFloat(amount?.replace('$', '')?.replace('K', '')) / 100;
        return percentage;
    }

    useEffect(() => {
        const handleResize = () => {
            // Adjust the number of products to show based on the window width
            if (window.innerWidth < 500) {
                setProductsToShow(2);
            } else {
                setProductsToShow(8);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const { id } = useParams();

    useEffect(() => {
        const handleResize = () => {
            // Adjust the number of products to show based on the window width
            if (window.innerWidth < 768) {
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

    const menuLeft = useRef(null);

    const userProfileString = localStorage.getItem('userProfile');
    const userProfile = userProfileString ? JSON.parse(userProfileString) : null;

    const images = [
        {
            id: 1,
            img: productMain,
            price: '$4500k',
            name: 'Product'
        },
        {
            id: 2,
            price: '$4200k',
            name: 'sports',
            img: phone
        },
        {
            id: 3,
            name: 'sports',
            price: '$4900k',
            img: mvpIcon
        },
        {
            id: 4,
            name: 'sports',
            price: '$1500k',
            img: productMain
        },
        {
            id: 5,
            price: '$4500k',
            img: expenseIcon
        },
        {
            id: 6,
            price: '$5500k',
            name: 'sports',

            img: shoes
        }
    ];

    const items = [
        {
            label: 'Edit Campaign',
            command: () => {
                if (userProfile?.role === 'Admin') navigate(`/editcompaign/${id}`);
                else navigate('/fundraise/campaign/edit');
            }
        },
        {
            label: 'Delete Campaign',
            command: () => {
                navigate('/compaign_management');
            }
        }
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>Campaign Detail</title>
            </Helmet>
            <div className="usermanage-main">
                <div className="user-manag-chat">
                    <h6 className="text-green c-dteail-title">Campaign Detail</h6>
                    <Row>
                        <Col xs={6} sm={7} className="detail-page">
                            <div className="d-flex location align-items-center">
                                <div>
                                    <h4 className="mb-0 ">{product.description}</h4>
                                    <p>Classy and stylish all the time</p>
                                </div>
                            </div>
                        </Col>
                        {small && (
                            <Col xs={6} sm={2} className="mb-2 detail-page text-end px-0">
                                <div className="campaign-options">
                                    <Button className="activetstaus mb-2">STATUS ACTIVE</Button>
                                    <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                                    <Button className="mr-0 spliterbtn" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                                        <img src={expenseIcon1} alt="pi-align-left" width="30x" />
                                    </Button>
                                </div>
                            </Col>
                        )}
                    </Row>
                    <Row>
                        <Col xs={12} md={5} className="user-tabs-btn mb-2 mt-2">
                            <div className="d-flex">
                                <img src={productMain} alt={'Product image'} width="100%" />
                            </div>
                        </Col>
                        <Col xs={12} md={5} className="ps-md-3 me-0 detail-page mb-2">
                            <div className="product-detail-body">
                                <div className="product-description">
                                    <p>
                                        {' '}
                                        The Apple Watch 52Mkv is a cutting-edge smartwatch that seamlessly blends style and functionality. Boasting a vibrant 52mm display, it offers a stunning visual
                                        experience. Packed with advanced health and fitness features,
                                    </p>
                                    <br />

                                    <p>
                                        {' '}
                                        this watch keeps you connected and on top of your well-being. With its sleek design and powerful performance, the Apple Watch 52Mkv is a must-have accessory for
                                        tech enthusiasts.{' '}
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </Col>
                        {!small && (
                            <Col xs={12} md={2} className="mb-2 detail-page text-end px-0">
                                <div className="campaign-options">
                                    <Button className="activetstaus mb-2">STATUS ACTIVE</Button>
                                    <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                                    <Button className="mr-0 spliterbtn" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                                        <img src={expenseIcon1} alt="pi-align-left" width="30x" />
                                    </Button>
                                </div>
                            </Col>
                        )}
                    </Row>

                    <div className="product-cards">
                        <div className="d-flex justify-content-between mt-3">
                            <h6>Donate</h6>
                            <h6>{progressValue(product.ObjectiveAmount) || '41'}%</h6>
                        </div>
                        <ProgressBar color="#4ca94c" value={progressValue(product.ObjectiveAmount)} showValue={false}></ProgressBar>
                        <div className="d-flex justify-content-between mt-3">
                            <h6>Raised:{product?.ObjectiveAmount}</h6>
                            <h6>Goal: {product?.ObjectiveAmount}</h6>
                        </div>
                    </div>
                    <hr />

                    <div className="c-related">
                        <h3 className="my-3">
                            Related Product (4,202){' '}
                            <Link to="/product_management" className="c-see-all">
                                SEE ALL
                            </Link>
                        </h3>
                        <Row>
                            {images.slice(0, productSlice).map((product, i) => (
                                <Col xs={6} sm={4} lg={3} xl={2} key={i} className="product-cards compaign my-2">
                                    <img alt={product.description} src={product.img} style={{ width: '100%' }} />

                                    <p className="price mt-3">{product.price}</p>
                                    <p className="description">{product.name}</p>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CompaignDetail;
