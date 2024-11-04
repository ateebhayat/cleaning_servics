import React from 'react';
import './statcard.scss';

const StatCard = ({ title, value, icon }) => {
    return (
        <div className="stat-card">
            <div className="stat-summary d-flex justify-content-between">
                <p className="stat-description">{title}</p>
                <img src={icon} className="stat-icon" alt="stat-icon" />
            </div>
            <p className="stat-value">{value}</p>
        </div>
    );
};
export default StatCard;
