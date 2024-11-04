import React from 'react';
// import { getLoggedUser, imageDisplay } from '../../helpers/utils';
// import moment from 'moment';

const MessageSection = ({ message }) => {
    // const userProfile = getLoggedUser();

    return (
        <>
            <div className={`d-flex chatsystem ${message?.id === 2 ? 'justify-content-end mymessagetext' : 'justify-content-start'}`}>
                <div className="employee-message-candidate-message-sender-container type-text mt-2 p-3 mx-2 mymessage">
                    <div dangerouslySetInnerHTML={{ __html: message?.text }} />
                    <p className={message?.id === 2 ? 'text-time' : 'text-black'}>
                        <small>{message?.time}</small>
                    </p>
                </div>
            </div>
        </>
    );
};

export default MessageSection;
