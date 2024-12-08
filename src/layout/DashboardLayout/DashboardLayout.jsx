import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar, MainPanel } from '@components/Dashboard';
import { Container } from 'react-bootstrap';
const DashboardLayout = () => {
    return (
        <Container fluid className="p-0">
            {/* Collapsible Sidebar */}
            {/* Main Content */}
            <Sidebar />
            <MainPanel>
                <Outlet />
            </MainPanel>
        </Container>
    );
};

export default DashboardLayout;
