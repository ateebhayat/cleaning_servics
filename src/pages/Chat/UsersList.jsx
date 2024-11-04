import React from 'react';
import { Link } from 'react-router-dom';
import bagde from '@icons/verify.png';

const UsersList = ({ item, selectedItemId, handleSideBarClick, chat, index }) => {
    return (
        <Link to={item.linkTo} className={item.id === selectedItemId ? 'active-item' : ''} onClick={() => handleSideBarClick(item.id)}>
            <img src={item.avatar} className="side-nav-icon" alt="nav-icon" />
            <span className="userName">{item.name}</span>
            {chat && index === 0 && (
                <span>
                    <img src={bagde} alt={bagde} width="30px" />
                </span>
            )}
            {chat && index !== 0 && <span className="unread-counter">2</span>}
        </Link>
    );
};
export default UsersList;
