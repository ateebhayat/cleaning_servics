import React from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './seller.scss';
import useGetSingleService from '../../api/hooks/use-shop-single';
import { useParams } from 'react-router-dom';

const AdPostingDetails = () => {
  const { id } = useParams();
  const { data: formData, isLoading } = useGetSingleService(id);

  return (
    <React.Fragment>
      <Helmet>
        <title>Service Details</title>
      </Helmet>
      <div className="adpost-screen">
        <div className="adpost-title">
          <h4 className="mb-3">Service Details</h4>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="serviceName">
                <Form.Label>Service Title</Form.Label>
                <InputGroup>
                  <Form.Control type="text" placeholder="Service Title" value={formData.service_name} disabled />
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="serviceType">
                <Form.Label>Service Type</Form.Label>
                <InputGroup>
                  <Form.Control type="text" placeholder="Service Type" value={formData.service_type} disabled />
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="price">
                <Form.Label>Price</Form.Label>
                <InputGroup>
                  <Form.Control type="text" placeholder="Price" value={formData.price} disabled />
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="duration">
                <Form.Label>Duration</Form.Label>
                <InputGroup>
                  <Form.Control type="text" placeholder="Duration" value={formData.duration} disabled />
                </InputGroup>
              </Form.Group>
            </Row>
          </Form>
        )}
      </div>
    </React.Fragment>
  );
};

export default AdPostingDetails;
