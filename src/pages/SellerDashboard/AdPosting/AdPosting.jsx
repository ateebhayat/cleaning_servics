import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../seller.scss';
import * as formik from 'formik';
import * as yup from 'yup';
import upload from '@icons/upload.png';
import check from '@images/check.png';
import arrow from '@images/right-arrow.png';
import { toast } from 'react-toastify';

const AdPosting = () => {
    const [photos, setPhotos] = useState([]);
    const [sumitted, setSubmited] = useState(false);

    const { Formik } = formik;

    const phoneRegex = /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})\s?[-.]?\s?\d{3}[-.]?\s?\d{4}$/;

    const schema = yup.object().shape({
        productTitle: yup.string().required(),
        compaign: yup.string().required(),
        description: yup.string(),
        price: yup.string().required('Price is required'),
        email: yup.string().required('Email is required'),
        phone: yup.string().matches(phoneRegex, 'Invalid phone number').required('Phone number is required'),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted')
    });

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        const remainingCapacity = 5 - photos.length;
        if (selectedFiles.length > remainingCapacity) {
            setPhotos([...photos, ...selectedFiles.slice(0, remainingCapacity)]);
            toast.info(`You can only select up to 5 images. Only the first ${remainingCapacity} images will be added.`);
        } else if (remainingCapacity > 0) {
            setPhotos([...photos, ...selectedFiles]);
        } else {
            toast.info('You have already selected the maximum allowed images (5).');
        }
    };

    const handleRemove = (index) => {
        const newPhotos = [...photos];
        newPhotos.splice(index, 1);
        setPhotos(newPhotos);
    };

    const handleSubmit = () => {
        setSubmited(true);
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>AdPosting | Management</title>
            </Helmet>
            {sumitted ? (
                <div className="adposted">
                    <div>
                        <img src={check} alt="check" className="check" />
                        <h3>Your AD request is successfully</h3>
                        <h3>sent to Campaign owner</h3>
                        <p>We will inform you shortly via email once func raiser of that specific campaign approves your product to published.</p>
                        <div className="my-3 d-flex justify-content-between">
                            <Button className="goto me-2">
                                <img src={check} alt="check" /> GOT TO HOME PAGE
                            </Button>
                            <Button className="view-ad">
                                VIEW YOUR AD <img src={arrow} alt="check" />
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="adpost-screen">
                    <div className="adpost-title">
                        <h4 className="mb-3">Post Your Ad</h4>
                    </div>

                    <Formik
                        validationSchema={schema}
                        onSubmit={handleSubmit}
                        initialValues={{
                            compaign: '',
                            productTitle: '',
                            description: '',
                            price: '',
                            email: '',
                            phone: '',
                            terms: false
                        }}
                    >
                        {({ handleSubmit, handleChange, values, errors }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationFormikproductTitle">
                                        <Form.Select name="compaign" isInvalid={errors.compaign} onChange={handleChange}>
                                            <option value="medical" selected>
                                                Medical
                                            </option>
                                            <option value="sports">Sports</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">{errors.compaign}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationFormikproductTitle">
                                        <Form.Label>Product Title</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                type="text"
                                                placeholder="E.g Medical campaign"
                                                name="productTitle"
                                                value={values.productTitle}
                                                onChange={handleChange}
                                                isInvalid={errors.city}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.productTitle}</Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationFormikproductTitle">
                                        <Form.Label>
                                            Description <span>(Optional)</span>
                                        </Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                as="textarea"
                                                rows={4}
                                                type="text"
                                                placeholder="E.g Type brief summary of the purpose of campaign"
                                                name="description"
                                                value={values.description}
                                                onChange={handleChange}
                                                isInvalid={errors.description}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="position-relative mb-3 selected-files">
                                        <p>
                                            <Form.Label>UPLOAD PHOTOS (Upto 5)</Form.Label>
                                        </p>
                                        <Form.Control
                                            type="file"
                                            required
                                            name="photos"
                                            accept="image/*"
                                            multiple
                                            onChange={handleFileChange}
                                            style={{ display: 'none' }} // Hide the default file input
                                        />
                                        <div style={{ display: 'flex', flexDirection: 'column' }} className="upload-box">
                                            {photos?.length <= 4 && <img src={upload} alt="FileUpload" style={{ cursor: 'pointer' }} onClick={() => document.getElementsByName('photos')[0].click()} />}
                                            {photos.length > 0 && (
                                                <div className="d-flex align-items-center mt-3">
                                                    {photos?.map((file, index) => (
                                                        <div key={index} className="position-relative d-flex me-3">
                                                            <span>
                                                                <img src={URL.createObjectURL(file)} alt={`Selected ${index + 1}`} style={{ maxWidth: '80px', borderRadius: '10px' }} />
                                                                <Button variant="danger" className="delete" size="sm" onClick={() => handleRemove(index)}>
                                                                    X
                                                                </Button>
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationFormikproductTitleas">
                                        <Form.Label>Set Price</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control type="number" placeholder="E.g $2500" name="price" value={values.price} onChange={handleChange} isInvalid={errors.price} />
                                            <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationFormikproductTitles">
                                        <Form.Label>Email</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control type="email" placeholder="kevin12345@gmail.com" name="email" value={values.email} onChange={handleChange} isInvalid={errors.email} />
                                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationFormikphone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control type="text" placeholder="+12323446456" name="phone" value={values.phone} onChange={handleChange} isInvalid={errors.phone} />
                                            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik0" className="my-3 mb-4">
                                    <Form.Check required name="terms" onChange={handleChange} isInvalid={errors.terms} id="validationFormik0">
                                        <Form.Check.Input type="checkbox" onChange={handleChange} name="terms" isInvalid={errors.terms} />
                                        <Form.Check.Label className="ms-2 label-link">
                                            I agree to ReRaise{' '}
                                            <a href="#" className="" target="_blank">
                                                Terms of Conditions{' '}
                                            </a>
                                            and{' '}
                                            <a target="_blank" href="#">
                                                Privacy Policy
                                            </a>
                                        </Form.Check.Label>
                                        <Form.Control.Feedback type="invalid">{errors.terms}</Form.Control.Feedback>
                                    </Form.Check>
                                </Form.Group>
                                <Button type="submit">Request To Publish</Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            )}
        </React.Fragment>
    );
};

export default AdPosting;
