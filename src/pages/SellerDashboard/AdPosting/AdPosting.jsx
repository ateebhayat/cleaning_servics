import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../seller.scss';
import * as formik from 'formik';
import * as yup from 'yup';
import check from '@images/check.png';
import toast from 'react-hot-toast';
import useCreateShop from '../../../api/hooks/use-create-shop';
import useAuth from '../../../hooks/use-auth';
import { Link } from 'react-router-dom';

const AdPosting = () => {
  const [submit, setSubmited] = useState(false);
  const { mutateAsync: createShop } = useCreateShop();
  const { user } = useAuth();

  const { Formik } = formik;

  const schema = yup.object().shape({
    service_name: yup.string().required('Service title is required'),
    service_type: yup.string().required('Service is required'),
    price: yup.string().required('Price is required'),
    duration: yup.string().required('Duration is required')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const body = {
        ...values,
        userId: user?._id
      };
      await createShop({ body }); // Wait for mutation to complete
      toast.success('Service created successfully!');
      setSubmited(true);
      resetForm(); // Reset the form on successful submission
    } catch (error) {
      console.error('Error creating service:', error);
      toast.error('Failed to create service.');
    } finally {
      setSubmitting(false); // Ensure the form is no longer submitting
    }
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>Service Posting</title>
      </Helmet>
      {submit ? (
        <div className="adposted">
          <div>
            <img src={check} alt="check" className="check" />
            <h3>Your Service is created is successfully</h3>

            <div className="my-3 d-flex justify-content-center">
              <Link to={'/seller/shop_listing'}>
                <Button className="goto me-2">GOT TO HOME PAGE</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="adpost-screen">
          <div className="adpost-title">
            <h4 className="mb-3">Post Shop</h4>
          </div>

          <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
            initialValues={{
              service_name: '',
              service_type: '',
              price: '',
              duration: ''
            }}
          >
            {({ handleChange, values, errors, handleSubmit }) => (
              <Form noValidate onSubmit={handleSubmit}>
                {console.log('Errors:', errors)}
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationFormikproductTitle">
                    <Form.Label>Service Title</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="E.g Medical campaign"
                        name="service_name"
                        value={values.service_name}
                        onChange={handleChange}
                        isInvalid={errors.service_name}
                      />
                      <Form.Control.Feedback type="invalid">{errors.service_name}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationFormikproductTitleas">
                    <Form.Label>Service Type</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="E.g Coffee, Sandwitches"
                        name="service_type"
                        value={values.service_type}
                        onChange={handleChange}
                        isInvalid={errors.service_type}
                      />
                      <Form.Control.Feedback type="invalid">{errors.service_type}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormikproductTitleas">
                    <Form.Label>Price</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="E.g Coffee, Sandwitches"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        isInvalid={errors.price}
                      />
                      <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col} md="12" controlId="validationFormikproductTitleas">
                    <Form.Label>Duration</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="E.g Coffee, Sandwitches"
                        name="duration"
                        value={values.duration}
                        onChange={handleChange}
                        isInvalid={errors.duration}
                      />
                      <Form.Control.Feedback type="invalid">{errors.duration}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Button type="submit">Add Service</Button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </React.Fragment>
  );
};

export default AdPosting;
