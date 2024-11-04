import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Card from '../../../components/Card/Card';
import { Form as FormikForm, Formik } from 'formik';
import Input from '@components/Input/Input';
import * as Yup from 'yup';

import './campaigns.scss';
const AddCampaign = () => {
    const initialValues = {
        title: '',
        donationTarget: '',
        country: '',
        state: '',
        email: '',
        phoneNumber: '',
        description: ''
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Campaign title is required'),
        donationTarget: Yup.number().positive('Donation target must be a positive number'),
        country: Yup.string().required('Country is required'),
        state: Yup.string().required('State is required'),
        email: Yup.string().required('Email is required').email('Invalid email address'),
        phoneNumber: Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must contain only digits'),
        description: Yup.string()
    });
    const countries = [
        { label: 'USA', value: 'usa', states: ['California', 'New York'] },
        { label: 'Canada', value: 'canada', states: ['Ontario', 'Quebec'] }
        // Add more countries with their states
    ];
    return (
        <Container fluid className="add-campaign">
            <Card className="p-5">
                <h4>Create New Campaign</h4>
                <Row>
                    <Col sm={12} lg={12} md={12}>
                        <div className="add-detail">
                            <p> PLEASE ADD DETAILS</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={() => alert('hello')}>
                        {({ isSubmitting }) => (
                            <FormikForm>
                                <Col lg={12} sm={12}>
                                    <Input name="title" placeholder="E.g Medical campaign" label="Ad Campaign Title" type="text" />
                                </Col>
                                <Col lg={12} sm={12}>
                                    <Input name="donationTarget" placeholder="E.g $2500" label="Set Donation collected Target (Optional)" type="text" />
                                </Col>
                                <Row>
                                    <Col lg={6}>
                                        <Input name="country" placeholder=" " label="Country" options={countries} type="select" />
                                    </Col>
                                    <Col lg={6}>
                                        <Input name="state" placeholder=" " label="Region/State" options={countries} type="select" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <Input name="email" placeholder=" " label="Email" type="text" />
                                    </Col>
                                    <Col lg={6}>
                                        <Input name="phoneNumber" label="Phone Number" type="text" />
                                    </Col>
                                </Row>
                                <Col>
                                    <Input name="description" placeholder="E.g Type brief summary of the purpose of campaign" label="Description (Optional)" type="textarea" />
                                </Col>
                                <Col lg={5}>
                                    <div className=" publish-btn">
                                        <button type="submit" disabled={isSubmitting ? true : false}>
                                            {isSubmitting ? <Spinner animation="border" size="sm" /> : 'Request To Publish'}
                                        </button>
                                    </div>
                                </Col>
                            </FormikForm>
                        )}
                    </Formik>
                </Row>
            </Card>
        </Container>
    );
};

export default AddCampaign;
