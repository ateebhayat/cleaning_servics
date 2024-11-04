import React from 'react';
import './topbar.scss';
import ProfileDropdown from '../DropDown/Profile/ProfileDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@redux/theme/theme_slice.js';
const Topbar = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        // handle logout
    };

    const pathname = window.location.pathname;
    const segments = pathname.split('/');

    const convertedString = segments
        .pop() // Get the last segment
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    const topBarString = ['Home', 'Seller', 'Fundraise'];
    const campaignsStrings = ['Add', 'Edit'];

    const userProfileString = localStorage.getItem('userProfile');
    const userProfile = userProfileString ? JSON.parse(userProfileString) : null;
    return (
        <div className="top-nav">
            <div className="nav-left-items">
                <button onClick={() => dispatch(toggleSidebar())} className="menu-toggler" type="button">
                    <FontAwesomeIcon icon={faBarsStaggered} />
                </button>
                <div className="d-flex flex-column">
                    <h5>{topBarString.includes(convertedString) ? 'Dashboard' : campaignsStrings.includes(convertedString) ? 'Product Management' : convertedString}</h5>

                    <p>{topBarString.includes(convertedString) && `Welcome back ${userProfile?.email?.split('@').at(0).toUpperCase()} `}</p>
                </div>
            </div>

            <div className="nav-right-items">
                {/* <NotificationDropdown items={notifications} handler={notificationHandler} /> */}
                <ProfileDropdown handler={logoutHandler} />
            </div>
        </div>
    );
};
export default Topbar;
