import React from 'react';
import './bar.scss';
const Bar = ({ content }) => {
    return (
        <div className="campaign">
            <h4>{content}</h4>
            <hr />
        </div>
    );
};

export default Bar;
