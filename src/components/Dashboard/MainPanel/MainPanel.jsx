import React, { useEffect, useState } from 'react';
import Topbar from '../Topbar/Topbar';
import './mainpanel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { collapseSidebar, toggleAutoCollapse } from '@redux/theme/theme_slice.js';

const MainPanel = (props) => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.theme.collapsed);
  const [pathName, setPathname] = useState('');
  const autoCollapsed = useSelector((state) => state.theme.autoCollapsed);

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
  useEffect(() => {
    const pathname = window.location.pathname;
    const sellerchat = pathname.split('/').pop();
    if (sellerchat === 'sellerchat') {
      setPathname(sellerchat);
    } else setPathname('');
  }, [window.location.pathname]);

  return (
    <div className={` main-panel ${collapsed || autoCollapsed ? 'full-width-panel' : ''}`}>
      <Topbar />
      <div className="main-content-wrapper bg-white" id={pathName === 'sellerchat' && 'innerChat'}>
        {/* content views will be rendered here */}
        {props.children}
      </div>
    </div>
  );
};
export default MainPanel;
