import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './profiledropdown.scss';
import userImg from '@images/user-img.jpg';
import { useNavigate } from 'react-router';

const ProfileDropdown = () => {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const toggleDropdown = () => {
        setShow(!show);
    };

    const userProfileString = localStorage.getItem('userProfile');
    const userProfile = userProfileString ? JSON.parse(userProfileString) : null;

    return (
        <Dropdown className="profile-dropdown" onToggle={toggleDropdown}>
            <Dropdown.Toggle id="profile-dropdown-toggle" className="d-flex">
                <p>
                    <img src={userImg} alt="user-img" onClick={() => navigate('/profile')} />
                </p>
                <div className="text-start">
                    <span>{userProfile?.email?.split('@')[0]}</span>
                    <span className="text-capitalize d-block text-start" style={{ fontSize: '12px' }}>
                        {userProfile?.role}
                    </span>
                </div>
            </Dropdown.Toggle>
        </Dropdown>
    );
};

export default ProfileDropdown;
