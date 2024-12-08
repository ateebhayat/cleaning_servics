import React, { useState } from 'react';
import { Modal, Form, Row, Col, Spinner } from 'react-bootstrap';
import './authmodal.scss';
import { Form as FormikForm, Formik } from 'formik';

import * as Yup from 'yup';
import Input from '@components/Input/Input';
import { Eye, EyeClose, Forward } from '@components/Icons/icons';
import useRegister from '../../api/hooks/use-register';
import toast from 'react-hot-toast';
const SignUpModal = ({ showPassword, showConfirmPassword, setShowConfirmPassword, setShowPassword }) => {
  const { mutateAsync: register } = useRegister();
  const signUpInitialValues = {
    email: '',
    password: '',
    confirmPass: ''
  };
  const signUpValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    confirmPass: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });
  const handleSignUp = async (values, { setSubmitting }) => {
    try {
      const res = await register({
        email: values.email,
        password: values.password,
        role: 'seller'.toUpperCase()
      });


      if (res) {
        toast.success(res.message);
      }
    } catch (error) {
      // Stop the loading toast and show an error message
      toast.error('Registration failed. Please try again.');
    } finally {
      setSubmitting(false); // Ensure form is no longer submitting
    }
  };

  return (
    <Row className="mb-5">
      <Col md={12} lg={12}>
        <Formik initialValues={signUpInitialValues} validationSchema={signUpValidationSchema} onSubmit={handleSignUp}>
          {({ isSubmitting }) => (
            <FormikForm>
              <Input name="email" placeholder=" " label="Email Address" type="text" />

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
  );
};
export default SignUpModal;
