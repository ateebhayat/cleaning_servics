import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../seller.scss';
import * as formik from 'formik';
import * as yup from 'yup';
import upload from '@icons/upload.png';
import check from '@images/check.png';
import arrow from '@images/right-arrow.png';
import toast from 'react-hot-toast';
import useCreateShop from '../../../api/hooks/use-create-shop';
import useAuth from '../../../hooks/use-auth';
import { Link } from 'react-router-dom';

const AdPosting = () => {
  const [photos, setPhotos] = useState([]);
  const [submit, setSubmited] = useState(false);
  const { mutateAsync: createShop, isError } = useCreateShop();
  const [location, setLocation] = useState({ lat: null, long: null });
  const { user } = useAuth();

  const { Formik } = formik;

  const schema = yup.object().shape({
    shop_name: yup.string().required('Shop title is required'),
    tagId: yup.string().required('TagId is required'),
    point_limit: yup.number().required('Limit is required').min(3, 'Limit must be at least 3').max(6, 'Limit must be at most 6'),
    description: yup.string(),
    timings: yup.array().of(
      yup.object().shape({
        open: yup.string().required('Open time is required'),
        close: yup
          .string()
          .required('Close time is required')
          .test('is-greater', 'Close time must be later than open time', function (value) {
            const { open } = this.parent; // Access sibling field 'open'
            return open && value && new Date(`1970-01-01T${value}`) > new Date(`1970-01-01T${open}`);
          })
      })
    )
  });
  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, long: longitude });
          },
          (err) => {
            setError(err.message);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    fetchLocation();
  }, []);
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
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const handleSubmit = (values, { setSubmitting }) => {
    const body = {
      ...values,
      userId: user?._id
    };

    if (values) {
      createShop({
        body: body
      });
    }
    if (!isError) {
      setTimeout(() => {
        setSubmited(true);
      }, 1000);
    }
  };
  console.log(location);
  return (
    <React.Fragment>
      <Helmet>
        <title>Shop Posting</title>
      </Helmet>
      {submit ? (
        <div className="adposted">
          <div>
            <img src={check} alt="check" className="check" />
            <h3>Your shop is created is successfully</h3>

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
              shop_name: '',
              description: '',
              point_limit: '',
              speciality: '',
              category: '',
              tagId: '',
              address: '',
              lat: location.lat ?? '',
              long: location.long ?? '',
              timings: daysOfWeek.map((day) => ({ day: day, open: '', close: '' }))
            }}
          >
            {({ handleChange, values, errors, handleSubmit }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationFormikproductTitle">
                    <Form.Label>Shop Title</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control type="text" placeholder="E.g Medical campaign" name="shop_name" value={values.shop_name} onChange={handleChange} isInvalid={errors.shop_name} />
                      <Form.Control.Feedback type="invalid">{errors.shop_name}</Form.Control.Feedback>
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
                  <Form.Group as={Col} md="6" controlId="validationFormikproductTitleas">
                    <Form.Label>Speciality</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="E.g Coffee, Sandwitches"
                        name="speciality"
                        value={values.speciality}
                        onChange={handleChange}
                        isInvalid={errors.speciality}
                      />
                      <Form.Control.Feedback type="invalid">{errors.speciality}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormikproductTitleas">
                    <Form.Label>Category</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control type="text" placeholder="E.g Coffee, Sandwitches" name="category" value={values.category} onChange={handleChange} isInvalid={errors.category} />
                      <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormikproductTitleas">
                    <Form.Label>TagId</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control type="text" placeholder="E.g Coffee, Sandwitches" name="tagId" value={values.tagId} onChange={handleChange} isInvalid={errors.tagId} />
                      <Form.Control.Feedback type="invalid">{errors.tagId}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormikproductTitleas">
                    <Form.Label>Loyality Point Limit</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="number"
                        placeholder="E.g Coffee, Sandwitches"
                        name="point_limit"
                        value={values.point_limit}
                        onChange={handleChange}
                        isInvalid={errors.point_limit}
                      />
                      <Form.Control.Feedback type="invalid">{errors.point_limit}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationFormikproductTitleas">
                    <Form.Label>Address</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control type="text" placeholder="E.g Coffee, Sandwitches" name="address" value={values.address} onChange={handleChange} isInvalid={errors.address} />
                      <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormikproductTitleas">
                    <Form.Label>Latitude</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control disabled type="number" placeholder="E.g Coffee, Sandwitches" name="lat" value={values.lat} onChange={handleChange} isInvalid={errors.lat} />
                      <Form.Control.Feedback type="invalid">{errors.lat}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormikproductTitleas">
                    <Form.Label>Longitude</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control disabled type="number" placeholder="E.g Coffee, Sandwitches" name="long" value={values.long} onChange={handleChange} isInvalid={errors.long} />
                      <Form.Control.Feedback type="invalid">{errors.long}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  {daysOfWeek.map((day, index) => (
                    <React.Fragment key={index}>
                      <Form.Group as={Col} md="6" controlId={`timings[${index}].open`}>
                        <Form.Label>{day} Open Time</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="time"
                            name={`timings[${index}].open`}
                            value={values.timings[index].open}
                            onChange={handleChange}
                            isInvalid={errors.timings?.[index]?.open}
                          />
                          <Form.Control.Feedback type="invalid">{errors.timings?.[index]?.open}</Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      <Form.Group as={Col} md="6" controlId={`timings[${index}].close`}>
                        <Form.Label>{day} Close Time</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="time"
                            name={`timings[${index}].close`}
                            value={values.timings[index].close}
                            onChange={handleChange}
                            isInvalid={errors.timings?.[index]?.close}
                          />
                          {errors.timings?.[index]?.close && <Form.Control.Feedback type="invalid">{errors.timings?.[index]?.close}</Form.Control.Feedback>}
                        </InputGroup>
                      </Form.Group>
                    </React.Fragment>
                  ))}
                </Row>

                <Button type="submit">Add Shop</Button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </React.Fragment>
  );
};

export default AdPosting;
