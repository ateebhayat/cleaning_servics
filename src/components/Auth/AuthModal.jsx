/* eslint-disable react/no-multi-comp */
import React, { useState } from 'react';
import { Modal, Form, Row, Col, Spinner } from 'react-bootstrap';
import './authmodal.scss';
import { Form as FormikForm, Formik } from 'formik';
import { loginWithoutAPI } from '@redux/auth/auth_slice';

import * as Yup from 'yup';
import Input from '@components/Input/Input';
import { Eye, EyeClose, Forward } from '@components/Icons/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser } from '../../redux/auth/auth_actions';
const AuthModal = ({ showLoginModal, handleLoginModal, setShowLoginModal, authuser }) => {
    const [activeButton, setActiveButton] = useState('login');
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleForgotPass = () => {
        setShowForgotPassword(true);
    };

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };
    const handleSignIn = () => {
        setShowForgotPassword(false);
        setActiveButton('login');
    };
    const handleSignUp = async (values, { setSubmitting }) => {
        setShowForgotPassword(false);
        // setActiveButton('signup');

        try {
            dispatch(registerUser(values)); // Dispatch registerUser action with the form data
            setSubmitting(false);
        } catch (error) {
            setSubmitting(false);
        }
    };

    const loginInitialValues = {
        email: '',
        password: ''
    };

    const signUpInitialValues = {
        name: '',
        email: '',
        password: '',
        confirmPass: '',
        country: '',
        reigon: '',
        role: authuser
    };

    const loginValidationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
    });
    const signUpValidationSchema = Yup.object().shape({
        name: Yup.string().required('Password is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
        confirmPass: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        country: Yup.string().required('Country is required'),
        reigon: Yup.string().required('Reigon is required')
    });

    const handleLogin = async (values, { setSubmitting }) => {
        try {
            dispatch(
                loginWithoutAPI({
                    ...values,
                    role: values && values?.email && values?.email?.split('@')[0] === 'admin' ? 'admin' : values?.email?.split('@')[0] === 'fundraiser' ? 'fundraiser' : 'buyer/seller'
                })
            );
            localStorage.setItem(
                'userProfile',
                JSON.stringify({
                    ...values,
                    role: values && values?.email && values?.email?.split('@')[0] === 'admin' ? 'admin' : values?.email && values?.email?.split('@')[0] === 'fundraiser' ? 'fundraiser' : 'buyer/seller'
                })
            );
            setSubmitting(false);
            setShowLoginModal(false);
            values?.email && values?.email?.split('@')[0] === 'admin' ? navigate('/home') : values?.email?.split('@')[0] === 'fundraiser' ? navigate('/fundraise') : navigate('/seller');
        } catch (error) {
            setSubmitting(false);
            setShowLoginModal(false);
        }
    };

    return (
        <div className="auth-modal-wrapper">
            <Modal show={showLoginModal} onHide={handleLoginModal} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className="close-btn" closeButton></Modal.Header>
                <div className="auth-modal-body">
                    <Modal.Body>
                        {showForgotPassword ? (
                            <div className="d-flex flex-column align-items-center justify-content-center forgot-pass ">
                                <Row>
                                    <Col>
                                        <ForgotPasswordModal handleSignIn={handleSignIn} handleSignUp={handleSignUp} />
                                    </Col>
                                </Row>
                            </div>
                        ) : (
                            <>
                                <div className="d-flex justify-content-between  btn-wrapper" id="loginTab">
                                    {authuser === 'Login' ? (
                                        <button type="button" className={`auth-button ${activeButton === 'login' ? 'active' : ''}`} onClick={() => handleButtonClick('login')}>
                                            Sign In
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            className={`auth-button ${activeButton === 'signup' || authuser !== 'Login' ? 'active' : ''}`}
                                            onClick={() => handleButtonClick('signup')}
                                        >
                                            Sign Up
                                        </button>
                                    )}
                                </div>
                                <div className="form-wrapper" id={authuser !== 'Login' && 'form-signup'}>
                                    {authuser === 'Login' && (
                                        <Row className="mb-5">
                                            <Col md={12}>
                                                <Formik initialValues={loginInitialValues} validationSchema={loginValidationSchema} onSubmit={handleLogin}>
                                                    {({ isSubmitting }) => (
                                                        <FormikForm>
                                                            <Input name="email" placeholder="" label="Email Address" type="text" />
                                                            <div className="d-flex align-item-center password-container">
                                                                <Input
                                                                    name="password"
                                                                    placeholder=""
                                                                    label="Password"
                                                                    type={showPassword ? 'password' : 'text'}
                                                                    showLink={true}
                                                                    handleAction={handleForgotPass}
                                                                    content="Forgot Password?"
                                                                />
                                                                <span className="eye" onClick={() => setShowPassword(!showPassword)}>
                                                                    {showPassword ? <Eye /> : <EyeClose />}
                                                                </span>
                                                            </div>

                                                            <div className="d-flex align-items-center justify-content-center auth-btn">
                                                                <button type="submit" disabled={isSubmitting ? true : false}>
                                                                    {isSubmitting ? <Spinner animation="border" size="sm" /> : 'Sign In'}
                                                                    <span>
                                                                        <Forward />
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </FormikForm>
                                                    )}
                                                </Formik>
                                            </Col>
                                        </Row>
                                    )}
                                    {authuser !== 'Login' && (
                                        <Row className="mb-5">
                                            <Col md={12} lg={12}>
                                                <Formik initialValues={signUpInitialValues} validationSchema={signUpValidationSchema} onSubmit={handleSignUp}>
                                                    {({ isSubmitting }) => (
                                                        <FormikForm>
                                                            <Input name="name" placeholder=" " label="Name" type="text" />

                                                            <Input name="email" placeholder=" " label="Email Address" type="text" />
                                                            <Input name="country" placeholder=" " label="Country" type="text" />
                                                            <Input name="reigon" placeholder=" " label="Region" type="text" />

                                                            <div className="d-flex align-item-center password-container">
                                                                <Input name="password" placeholder="8+ characters" label="Password" type={showPassword ? 'password' : 'text'} />
                                                                <span className="eye" onClick={() => setShowPassword(!showPassword)}>
                                                                    {showPassword ? <Eye /> : <EyeClose />}
                                                                </span>
                                                            </div>
                                                            <div className="d-flex align-item-center password-container">
                                                                <Input name="confirmPass" placeholder=" " label="Confirm Password" type={showConfirmPassword ? 'password' : 'text'} />
                                                                <span className="eye" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                                    {showConfirmPassword ? <Eye /> : <EyeClose />}
                                                                </span>
                                                            </div>

                                                            <Form.Group className="mb-3 check-box d-flex" controlId="formBasicCheckbox">
                                                                <Form.Check type="checkbox" />
                                                                <label className="label-privacy">
                                                                    {' '}
                                                                    Are you agree to ReRaise <span> Terms of Condition</span> and <span>Privacy Policy.</span>
                                                                </label>
                                                            </Form.Group>

                                                            <div className="d-flex align-items-center justify-content-center auth-btn">
                                                                <button type="submit" disabled={isSubmitting ? true : false}>
                                                                    {isSubmitting ? <Spinner animation="border" size="sm" /> : 'Sign Up'}
                                                                    <span>
                                                                        <Forward />
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </FormikForm>
                                                    )}
                                                </Formik>
                                            </Col>
                                        </Row>
                                    )}
                                </div>
                            </>
                        )}
                    </Modal.Body>
                </div>
            </Modal>
        </div>
    );
};

export default AuthModal;

const ForgotPasswordModal = ({ handleSignIn }) => {
    const [otpView, setOtpView] = useState(false);
    const [passwordResetView, setPasswordresetView] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    const forgotPassValidationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required')
    });

    const otpValidationSchema = Yup.object().shape({
        code: Yup.string().required('Code is required')
    });
    const resetPasswordValidationSchema = Yup.object().shape({
        password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
        confirmPass: Yup.string()
            .required('Password is required')
            .trim()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });
    const otpInitialValue = {
        code: ''
    };
    const forgotPassInitialValue = {
        email: ''
    };
    const resetPasswordInitialValue = {
        password: '',
        confirmPass: ''
    };
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        resetForm();
        setOtpView(true);
        setSubmitting(false);
    };
    const handleSubmitCode = (values, { setSubmitting, resetForm }) => {
        resetForm();
        setPasswordresetView(true);
        setOtpView(false);
        setSubmitting(false);
    };
    const handleResend = () => {
        toast.success('Code sent successfully');
    };

    return (
        <>
            {otpView ? (
                <>
                    <h4 className="forgot-pass-title">Verify Your Email Address</h4>
                    <span className="forgot-pass-text">Please enter verification code which we sent you on your email for confirmation.</span>

                    <Formik initialValues={otpInitialValue} validationSchema={otpValidationSchema} onSubmit={handleSubmitCode} enableReinitialize>
                        {({ isSubmitting }) => (
                            <FormikForm>
                                <Input name="code" label="Verification Code" type="text" showLink={true} handleAction={handleResend} content="Resend Code" />

                                <div className="d-flex align-items-center justify-content-center auth-btn">
                                    <button type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? <Spinner animation="border" size="sm" /> : ' Verify me'}

                                        <span>
                                            <Forward />
                                        </span>
                                    </button>
                                </div>
                            </FormikForm>
                        )}
                    </Formik>
                </>
            ) : passwordResetView ? (
                <>
                    <h4 className="forgot-pass-title">Reset your password </h4>
                    <span className="forgot-pass-text">Your new password must be different from your previous used passwords for your account security.</span>

                    <Formik initialValues={resetPasswordInitialValue} validationSchema={resetPasswordValidationSchema} onSubmit={handleSubmitCode}>
                        {({ isSubmitting }) => (
                            <FormikForm>
                                <div className="d-flex align-item-center password-container">
                                    <Input name="password" placeholder="8+ characters" label="Password" type={showPassword ? 'password' : 'text'} />
                                    <span className="eye" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <Eye /> : <EyeClose />}
                                    </span>
                                </div>
                                <div className="d-flex align-item-center password-container">
                                    <Input name="confirmPass" placeholder=" " label="Confirm Password" type={showConfirmPassword ? 'password' : 'text'} />
                                    <span className="eye" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {showConfirmPassword ? <Eye /> : <EyeClose />}
                                    </span>
                                </div>

                                <div className="d-flex align-items-center justify-content-center auth-btn">
                                    <button type="submit" disabled={false}>
                                        {isSubmitting ? <Spinner animation="border" size="sm" /> : 'Send Code'}
                                        <span>
                                            <Forward />
                                        </span>
                                    </button>
                                </div>
                            </FormikForm>
                        )}
                    </Formik>
                </>
            ) : (
                <>
                    <h4 className="forgot-pass-title">Forgot Password</h4>
                    <span className="forgot-pass-text">Enter the email address associated with your ReRaise account.</span>

                    <Formik initialValues={forgotPassInitialValue} validationSchema={forgotPassValidationSchema} onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <FormikForm>
                                <Input name="email" placeholder="" label="Email Address" type="text" />

                                <div className="d-flex align-items-center justify-content-center auth-btn">
                                    <button type="submit" disabled={false}>
                                        {isSubmitting ? <Spinner animation="border" size="sm" /> : 'Send Code'}
                                        <span>
                                            <Forward />
                                        </span>
                                    </button>
                                </div>
                            </FormikForm>
                        )}
                    </Formik>
                    <div className="auth-links">
                        <p>
                            Already have account? <a onClick={handleSignIn}>Sign In</a>
                        </p>
                        {/* <p>
                            Don’t have account? <a onClick={handleSignUp}>Sign Up</a>
                        </p> */}
                    </div>
                    <hr />
                    <p className="contact-support">
                        You may contact <a> Customer Service</a> for help restoring access to your account.
                    </p>
                </>
            )}
        </>
    );
};
