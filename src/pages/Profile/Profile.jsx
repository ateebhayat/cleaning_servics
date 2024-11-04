import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import userImg from '@images/user-img.jpg';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import { Form as FormikForm, Formik } from 'formik';
import '../AdminDashbord/admin.scss';
import fileUpload from '@icons/fileUpload.png';
import eye from '@icons/eye.svg';
import eyeoff from '@icons/eye-off.svg';
import { Col, InputGroup, Button } from 'react-bootstrap';

const Profile = () => {
    // const [show, setShow] = useState(false);
    const [photo, setPhotos] = useState(null);
    const [passwordVisible, setPaswordVisible] = useState(false);
    const userProfileString = localStorage.getItem('userProfile');
    const userProfile = userProfileString ? JSON.parse(userProfileString) : null;

    const initialValues = {
        password: 'Password',
        email: userProfile?.email,
        phone: '+1 (925) 612-6855',
        name: userProfile?.email?.split('@')[0]
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required'),
        phone: Yup.string()
            .matches(/^\d{10,14}$/, 'Invalid phone number')
            .required('Phone is required')
    });

    const handleFileChange = (e) => {
        setPhotos(e.target.files[0]);
    };

    const getObjectURL = () => {
        if (photo instanceof File) {
            return URL.createObjectURL(photo);
        } else if (photo) {
            return photo;
        } else {
            return userImg;
        }
    };

    const handleSubmit = ({ setSubmitting }) => {
        // const photoValue = { ...values, photo: photo || {} };
        setSubmitting(false);
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Profile | Template</title>
            </Helmet>

            <div className="profile-main-wrapper">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ handleSubmit, handleChange, values, errors }) => (
                        <FormikForm style={{ maxWidth: '500px' }} noValidate onSubmit={handleSubmit}>
                            <div className="home-table-section profile ">
                                <p className="position-relative">
                                    <img src={getObjectURL()} alt="user-img" className="profile" />
                                    <div className="d-flex me-3">
                                        <Form.Group className=" mb-3 selected-files">
                                            <Form.Control type="file" required name="photos" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                                            <div className="upload-box">
                                                <img src={fileUpload} alt="FileUpload" style={{ cursor: 'pointer' }} onClick={() => document.getElementsByName('photos')[0].click()} />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </p>
                                <div className="text-start">
                                    <span className="name">
                                        <Form.Control
                                            style={{ border: 'none', padding: '0px' }}
                                            type="text"
                                            placeholder="name"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            isInvalid={errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                    </span>
                                    <span className="text-capitalize d-block text-start" style={{ fontSize: '12px' }}>
                                        {userProfile?.role}
                                    </span>
                                </div>
                            </div>

                            <Form.Group as={Col} md="12" controlId="validationFormikPassword">
                                <Form.Label>Password</Form.Label>
                                <InputGroup hasValidation className="position-relative profile-password">
                                    <Form.Control
                                        type={!passwordVisible ? 'password' : 'text'}
                                        placeholder="Password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                    <img src={!passwordVisible ? eye : eyeoff} alt="password-eye" className="eye" width="23px" onClick={() => setPaswordVisible(!passwordVisible)} />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} md="12" className="my-3" controlId="validationFormikEmail">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control type="email" readOnly placeholder="user@domain.com" name="email" value={values.email} onChange={handleChange} isInvalid={errors.email} />
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

                            <Button type="submit" className="mt-3">
                                Update
                            </Button>
                        </FormikForm>
                    )}
                </Formik>
            </div>
        </React.Fragment>
    );
};

export default Profile;
