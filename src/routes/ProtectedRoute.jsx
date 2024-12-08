import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/use-auth';

// Mocking an authentication service and user type check

const ProtectedRoute = ({ allowedRoles }) => {
    const { isAuthenticated, userType } = useAuth();

    if (!isAuthenticated) {
        // If user is not authenticated, redirect to login page
        return <Navigate to="/" />;
    }

    if (!allowedRoles.includes(userType)) {
        // If user is authenticated but doesn't have the right role, redirect to an error or unauthorized page
        return <Navigate to="/" />;
    }

    // If authenticated and has the right role, render the outlet (child routes)
    return <Outlet />;
};

export default ProtectedRoute;