import React from 'react';
import { Link } from 'react-router-dom';
const SidebarItem = ({ item, selectedItemId, handleSideBarClick }) => {
  console.log({ item });
  return (
    <Link to={item.linkTo} className={item.id === selectedItemId ? 'active-item' : ''} onClick={() => handleSideBarClick(item.id)}>
      <img src={item.iconLight} className="side-nav-icon" alt="nav-icon" />
      <span>{item.name}</span>
    </Link>
  );
};
export default SidebarItem;
