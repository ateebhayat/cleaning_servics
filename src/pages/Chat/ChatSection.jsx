import React, { useEffect, useRef, useState } from 'react';
import './chat.scss';
import { useSelector, useDispatch } from 'react-redux';
import { collapseSidebar, toggleAutoCollapse } from '@redux/theme/theme_slice.js';
import Form from 'react-bootstrap/Form';
import art from '@images/art.png';
import send from '@images/send-message.png';
import fileUpload from '@images/attachment.png';
import { Button } from 'react-bootstrap';
import MessageSection from './MessageSection';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ChatSection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const collapsed = useSelector((state) => state.theme.collapsed);
    const autoCollapsed = useSelector((state) => state.theme.autoCollapsed);
    const [message, setMessage] = useState('');
    const [photos, setPhotos] = useState([]);

    const messageContainerRef = useRef(null);

    const [messagesData, setMessagesData] = useState([
        {
            id: 1,
            text: 'Hi, i hust saw you iPhone watch, Thats super, awseome ,  i want to talk to about it.',
            time: '18:12'
        },
        {
            id: 2,
            text: 'Hi, David.',
            time: '18:12'
        },
        {
            id: 2,
            text: 'Yes yes, Thank you for these words, Yes im avalible now to talk',
            time: '18:12'
        }
    ]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                dispatch(collapseSidebar(true));
                dispatch(toggleAutoCollapse(true));
                return;
            }
            dispatch(collapseSidebar(false));
            dispatch(toggleAutoCollapse(false));
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial setup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);

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

    const scrollToBottomOfSection = () => {
        if (messageContainerRef.current) {
            const messageContainer = messageContainerRef.current;
            messageContainer.scrollTo({
                top: messageContainer.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    const messageSend = async () => {
        const lastObjectHasIdOne = messagesData.length > 0 && messagesData[messagesData.length - 1].id === 2;
        const newMessage = {
            id: lastObjectHasIdOne ? 1 : 2,
            text: message,
            time: '12:00'
        };
        setMessagesData((prevMessages) => [...prevMessages, newMessage]);
        scrollToBottomOfSection();
        setMessage('');
    };
    // @todo
    // const handleRemove = (index) => {
    //     const newPhotos = [...photos];
    //     newPhotos.splice(index, 1);
    //     setPhotos(newPhotos);
    // };

    return (
        <div className={`main-panel ${collapsed || autoCollapsed ? 'full-width-panel' : ''}`}>
            <div className="main-content-wrapper">
                <div className="top-user-card">
                    <img src={art} alt="user" />
                    <span className="ms-2">David Moorey</span>
                    {/*
                    @TODO
                    
                    <img src={close} alt="user" className="close-top-user" /> */}
                </div>

                <div className="product-top-card mt-2">
                    <div>
                        <img src={art} alt="user" />
                    </div>
                    <div className="ms-3">
                        <p className="">Apple Watch %2Mkv</p>
                        <h6>$176.00</h6>
                    </div>
                    <Button className="view-ad" onClick={() => navigate('/product/1')}>
                        View Ad
                    </Button>
                </div>
            </div>
            <div className="chat-block">
                <div style={{ height: '390px', overflowY: 'auto' }} className="candidate-container" ref={messageContainerRef}>
                    <div className="text-center">
                        <Button className="today">Today</Button>
                    </div>
                    {messagesData?.length > 0 ? (
                        messagesData?.map((message, index) => <MessageSection key={index} message={message} />)
                    ) : (
                        <div>
                            <h6 className="text-center">No Chat Messages Found.</h6>
                        </div>
                    )}
                </div>
            </div>
            <div className="message-sendbox">
                <div className="flex justify-content-end gap-3 message-field">
                    <Form.Control
                        onKeyPress={(e) => {
                            if (e.key === 'Enter' && message !== '') {
                                messageSend();
                            } else setMessage(e.target.value);
                        }}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                        className="search-input w-full"
                        value={message}
                    />

                    <Form.Group className="selected-files">
                        <Form.Control
                            type="file"
                            required
                            name="photos"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                            style={{ display: 'none' }} // Hide the default file input
                        />
                        <img src={fileUpload} alt="FileUpload" className="fileUpload" style={{ cursor: 'pointer', right: '56px' }} onClick={() => document.getElementsByName('photos')[0].click()} />

                        {/* {photos.length > 0 && (
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
                        )} */}
                    </Form.Group>

                    <img
                        src={send}
                        onClick={() => {
                            if (message !== '') {
                                messageSend();
                            }
                        }}
                        alt="user"
                        className={message === '' && 'blur-send-icon'}
                    />
                </div>
            </div>
        </div>
    );
};
export default ChatSection;
