import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './about.scss';
import Banner from '@components/Banner/Banner';

import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { scrollFunctions } from '../../utils/common';

const Contact = () => {
    useEffect(() => {
        scrollFunctions();
    }, [location.pathname]);

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().required('Phone Number is required'),
        message: Yup.string().required('Message is required')
    });

    const handleSubmit = ({ setSubmitting }) => {
        // Your submit logic goes here
        // console.log(values);
        setSubmitting(false);
    };

    return (
        <div
            style={{
                background: '#fff'
            }}
        >
            <div className="effect-box">
                <Banner title="Contact" description="Elevate Generosity, Empower Change" />
                <Container className="about-container">
                    <Row>
                        <Col lg={12} sm={12}>
                            <h1 className="heading-about">Let Us Come Together To Make a Difference</h1>
                            <p className="content-about">
                                At ReRaiseIt, we envision a purpose-driven platform where generosity meets commerce. Our unique charity-centric eCommerce hub empowers sellers to donate high-value
                                items, fostering a community dedicated to making meaningful contributions through every sale. Join us in reshaping charity through commerce.
                            </p>
                        </Col>
                    </Row>
                    <div className="contact-form">
                        <h2 className="text-center">Contact Form</h2>
                        <Row>
                            <Col sm={12}>
                                <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                                    {({ handleSubmit, handleChange, values, errors }) => (
                                        <FormikForm noValidate onSubmit={handleSubmit}>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} md="12" controlId="validationFormikName">
                                                    <Form.Label>Name</Form.Label>
                                                    <InputGroup hasValidation>
                                                        <Form.Control type="text" placeholder="Your Name" name="name" value={values.name} onChange={handleChange} isInvalid={errors.name} />
                                                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>

                                                <Form.Group as={Col} md="12" controlId="validationFormikEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <InputGroup hasValidation>
                                                        <Form.Control type="email" placeholder="user@domain.com" name="email" value={values.email} onChange={handleChange} isInvalid={errors.email} />
                                                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>

                                                <Form.Group as={Col} md="12" controlId="validationFormikPhone">
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <InputGroup hasValidation>
                                                        <Form.Control type="text" placeholder="+12323446456" name="phone" value={values.phone} onChange={handleChange} isInvalid={errors.phone} />
                                                        <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>

                                                <Form.Group as={Col} md="12" controlId="validationFormikMessage">
                                                    <Form.Label>Message</Form.Label>
                                                    <InputGroup hasValidation>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={4}
                                                            placeholder="Your Message"
                                                            name="message"
                                                            value={values.message}
                                                            onChange={handleChange}
                                                            isInvalid={errors.message}
                                                        />
                                                        <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Row>

                                            <Button type="submit">Submit</Button>
                                        </FormikForm>
                                    )}
                                </Formik>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Contact;
