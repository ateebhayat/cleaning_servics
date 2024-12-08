import React, { useEffect, useState } from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import productMain from '@images/product-detail-main.png';
import '../../../node_modules/swiper/swiper.scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Carousel } from 'react-responsive-carousel';
import './productdetail.scss';
import toast from 'react-hot-toast';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Flag, Location, Star, Buy } from '@components/Icons/icons';
import { useNavigate } from 'react-router-dom';
import share from '@icons/share1.svg';
import save from '@icons/save.png';
import savefill from '@icons/save-fill.png';

import { scrollFunctions } from '../../utils/common';

const ProductDetail = () => {
  const navigate = useNavigate();
  const [boookmark, setbookMark] = useState(false);

  useEffect(() => {
    scrollFunctions();
  }, [location.pathname]);
  const images = [
    {
      id: 1,
      img: productMain
    },
    {
      id: 2,
      img: productMain
    },
    {
      id: 3,
      img: productMain
    },
    {
      id: 4,
      img: productMain
    }
  ];
  return (
    <div className="prod-detail prod-detail-effect">
      <Container className="px-0">
        <Row className="detail-page-row">
          {/* Product Image Caraousal Section */}
          <Col sm={12} lg={8} className="position-relative">
            <Carousel
              thumbWidth={80}
              showStatus={false}
              showArrows={true}
              showIndicators={false}
              swipeable={true}
              autoPlay={false}
              renderThumbs={(children) => children}
            >
              {images.map((img, index) => (
                <div key={index} className="d-flex">
                  <img src={img.img} alt={`Product image ${index}`} />
                </div>
              ))}
            </Carousel>
            <div className="bookmark">
              {boookmark ? (
                <img src={save} alt="bookmark" onClick={() => setbookMark(!boookmark)} />
              ) : (
                <img src={savefill} onClick={() => setbookMark(!boookmark)} alt="bookmark" />
              )}
            </div>
          </Col>
          <Col sm={12} lg={4} className="product-content pe-0">
            <div className="mb-2">
              <div className="d-flex align-items-center justify-content-between mb-1">
                <div className="frame">
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="star">
                      <Star />
                    </span>

                    <span className="category-content">Associated with: Medical Campaign </span>
                  </div>
                </div>
                <span className="flag">
                  <Flag />
                </span>
              </div>
              {/* Product Name Section */}
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center justify-content-center">
                  <span className="product-name">Apple Watch 52Mkv </span>
                </div>

                <span
                  className="flag cursor-pointer share"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success('Link Compied');
                  }}
                >
                  <img src={share} alt="share" />
                  <span>Share</span>
                </span>
              </div>

              <p className="product-tagline">Classy and stylish all the time</p>
              <hr />

              <div className="details location-wrapper">
                <h4 className="location mb-2">Details</h4>

                <p className="mt-1">
                  When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a...
                </p>
              </div>
              <hr />
            </div>
            {/* Product Price Section */}
            <div className="d-flex align-items-center price-wrapper ">
              <span className="price">$175.00</span>
              <div className="date-published">
                <span>5 days ago</span>
              </div>
            </div>
            <hr />
            {/* Product Location Section */}
            <div className="location-wrapper">
              <h4 className="location mb-1">Location</h4>
              <div className="d-flex align-items-center address-container">
                <span className="loc-icon me-3">
                  <Location />
                </span>

                <span className="address">101 JASPER AVE SW. 25-108 CEDAR ST. SUITE 5 BIRCHMOUNT RD, Toronto, Canada</span>
              </div>
            </div>
            <hr />
            {/* Progress bar Section */}
            <div className="progress-wrapper">
              <div className="d-flex align-items-center justify-content-between my-2 donate">
                <span>Donate</span>
                <p className="text-end">85% completed</p>
              </div>
              <ProgressBar className="bar" now={90} />
              <div className="d-flex align-items-center justify-content-between mt-1 target">
                <p>
                  <span> Raised:</span> $8500
                </p>
                <p className="text-end">
                  <span> Goal:</span> $1,0000
                </p>
              </div>
            </div>
            <hr />
            {/* Buttons Section */}
            <div className="btn-wrapper">
              <div className="d-flex mb-3">
                <button type="button" className="outline-btn">
                  Seller Details
                </button>
                <button type="button" className="outline-btn" onClick={() => navigate('/chat', { state: {} })}>
                  Chat
                </button>
              </div>
              <button type="button" className="buy-btn">
                <span>
                  <Buy />
                </span>
                Buy Now
              </button>
            </div>
          </Col>
        </Row>
        {/* <Row className="mb-5">
                    <Col className="content-detail-wrap">
                        <Tabs defaultActiveKey="desc" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="desc" title="Description">
                                <div className="description-wrapper">
                                    <h5>Product Description</h5>
                                    <p>
                                        When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole, the Lunar
                                        Force 1 adapts AF-1 style, so you can keep your flame burning when the weather hits. Metal lace hardware and extended tongue bring mountain boot toughness,
                                        while the star-studded toe design gives your look the edge Durable leather is easily cleanable so you can keep your look fresh. Originally designed for
                                        performance hoops, the Air unit delivers lightweight cushioning. Rubber outsole with aggressive traction pattern adds durable grip. Water-repellent finish and
                                        internal membrane help keep your feet dry.Water-repellent finish and internal membrane help keep your feet dry.
                                    </p>
                                </div>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row> */}
        {/* <div className="content-detail-wrap">
                    <div
                        style={{
                            borderBottom: '2px solid #EAECF0',
                            height: 2
                        }}
                    />
                    <SimilarProducts products={ProductsData} />
                </div> */}
      </Container>
    </div>
  );
};

export default ProductDetail;
