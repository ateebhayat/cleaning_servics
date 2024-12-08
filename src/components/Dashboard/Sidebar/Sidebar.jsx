import React, { useState, useEffect } from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import './sidebar.scss';
import { useNavigate } from 'react-router-dom';
import logoImg from '@public/fk-logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import SidebarItem from './SidebarItem';
import SidebarItemCollapse from './SidebarItemCollapse';
import { collapseSidebar } from '@redux/theme/theme_slice.js';
// import all static icons

import logout from '@images/logout.png';
import { sideBarBuyItems } from './SidebarMenu';
import { queryClient } from '../../../utils/react-query-client';

const Sidebar = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.theme.collapsed);
  const autoCollapsed = useSelector((state) => state.theme.autoCollapsed);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [sideBarMenuItems, setSideBarItems] = useState([]);
  const userProfileString = localStorage.getItem('userInfo');
  const userProfile = userProfileString ? JSON.parse(userProfileString) : null;

  const navigate = useNavigate();
  useEffect(() => {
    const storedSelectedItem = localStorage.getItem('activeItem');
    // persist selected item on page refresh
    selectActiveItem(parseInt(storedSelectedItem, 10));
    // navigate to selected item route
    activateRouter(selectedItemId);
  }, []);

  const selectActiveItem = (storedItem) => {
    if (storedItem) {
      setSelectedItemId(storedItem);
      return;
    }
    setSelectedItemId(1);
  };

  useEffect(() => {
    if (userProfile) {
      setSideBarItems(sideBarBuyItems);
    }
  }, []);

  const activateRouter = (selectedItemId) => {
    const selectedItem = sideBarMenuItems?.filter((item) => {
      let foundItem;
      if (item.child) {
        foundItem = item.child.filter((childItem) => childItem.id === selectedItemId);
      }
      if (item.id === selectedItemId) {
        foundItem = item;
      }
      return foundItem;
    });
    navigate(selectedItem?.linkTo);
  };

  const handleSideBarClick = (itemId) => {
    setSelectedItemId(itemId);
    localStorage.setItem('activeItem', itemId);
  };

  const handleLogout = () => {
    localStorage.clear();
    queryClient.clear();
    navigate('/');
  };

  return (
    <div className={`sidebar ${collapsed ? 'hide-sidebar' : ''}`}>
      {autoCollapsed ? (
        <button type="button" onClick={() => dispatch(collapseSidebar(true))} className="btn-collapse-sidebar">
          <FontAwesomeIcon className="collapse-icon" icon={faCircleXmark} />
        </button>
      ) : (
        <></>
      )}

      <Container>
        <div className="brand-logo">
          <img
            src={logoImg}
            alt="brand-logo"
            style={{
              cursor: 'pointer'
            }}
            onClick={() => navigate('/')}
          />
        </div>
        <div className="side-nav-wrapper">
          <Nav defaultActiveKey="/" className="sidebar-nav-items">
            {sideBarMenuItems.map((item, i) =>
              item.child ? (
                <SidebarItemCollapse key={item.id} item={item} index={i} chat={false} selectedItemId={selectedItemId} handleSideBarClick={handleSideBarClick} />
              ) : (
                <SidebarItem key={item.id} index={i} chat={false} item={item} selectedItemId={selectedItemId} handleSideBarClick={handleSideBarClick} />
              )
            )}
          </Nav>
        </div>
        <Button className="logout" onClick={handleLogout}>
          <img src={logout} alt="logout" /> Logout
        </Button>
      </Container>
    </div>
  );
};
export default Sidebar;
