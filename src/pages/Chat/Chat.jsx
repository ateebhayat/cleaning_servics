import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './chat.scss';
import ChatSection from './ChatSection';
import '../../App.scss';
import Users from './Users';
import { scrollFunctions } from '../../utils/common';

const Chat = () => {
    const [pathName, setPathname] = useState('');

    useEffect(() => {
        const pathname = window.location.pathname;
        const sellerchat = pathname.split('/').pop();
        if (sellerchat === 'sellerchat') {
            setPathname(sellerchat);
        }
        scrollFunctions();
    }, []);

    return (
        <React.Fragment>
            <Container fluid className="p-0 chat-main" id={pathName === 'sellerchat' && 'innerChat'}>
                <div className="wrapper">
                    <Users pathName={pathName} />
                    <ChatSection />
                </div>
            </Container>
        </React.Fragment>
    );
};
export default Chat;
