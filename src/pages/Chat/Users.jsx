import React, { useState, useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import '../../components/Dashboard/Sidebar/sidebar.scss';
import { useNavigate } from 'react-router-dom';
import UsersList from './UsersList';
import UsersListCollapse from './UsersListCollapse';
import Form from 'react-bootstrap/Form';
import search from '@images/search.svg';
import arrow from '@icons/down-arrow.png';
import { UsersLists } from './UsersLists';

const Users = () => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [chatSidebar, setChatSidebar] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedSelectedItem = localStorage.getItem('activeItem');
        selectActiveItem(parseInt(storedSelectedItem, 10));
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
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setChatSidebar(true);
            } else {
                setChatSidebar(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const activateRouter = (selectedItemId) => {
        const selectedItem = UsersLists.filter((item) => {
            let foundItem;
            if (item.child) {
                foundItem = item.child.filter((childItem) => childItem.id === selectedItemId);
            }
            if (item.id === selectedItemId) {
                foundItem = item;
            }
            return foundItem;
        });
        navigate(selectedItem.linkTo);
    };
    const filteredData = UsersLists?.filter((item) => Object.values(item)?.some((field) => String(field)?.toLowerCase()?.includes(searchText.toLowerCase())));

    const handleSideBarClick = (itemId) => {
        setSelectedItemId(itemId);
        localStorage.setItem('activeItem', itemId);
    };

    return (
        <div className={`sidebar chat-sidebar ${chatSidebar ? 'hide-sidebar sellerChating' : 'sellerChating'}`}>
            <div className="nav-left-items"></div>
            <button onClick={() => setChatSidebar(!chatSidebar)} className="menu-toggler" type="button">
                <img src={arrow} alt="arrow" />
            </button>

            <Container>
                <div className="side-nav-wrapper">
                    <div className="flex justify-content-end gap-3">
                        <div className="flex px-3 justify-content-between align-items-center userlisting h-3rem mt-1" style={{ minWidth: '135px', maxWidth: '344px', width: '100%' }}>
                            <Form.Control
                                value={searchText}
                                onChange={(e) => {
                                    setSearchText(e.target.value);
                                }}
                                placeholder="Search"
                                className="search-input w-full"
                            />
                            <img src={search} alt="search icon" className="px-2 cursor-pointer" />
                        </div>
                    </div>
                    <Nav defaultActiveKey="/" className="sidebar-nav-items">
                        {filteredData?.map((item, i) =>
                            item.child ? (
                                <UsersListCollapse key={item.id} item={item} selectedItemId={selectedItemId} handleSideBarClick={handleSideBarClick} />
                            ) : (
                                <UsersList key={item.id} index={i} chat={true} item={item} selectedItemId={selectedItemId} handleSideBarClick={handleSideBarClick} />
                            )
                        )}
                    </Nav>
                </div>
            </Container>
        </div>
    );
};
export default Users;
