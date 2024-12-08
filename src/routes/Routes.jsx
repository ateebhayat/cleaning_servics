import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '@layout/DashboardLayout/DashboardLayout';
import PublicLayout from '@layout/PublicLayout/PublicLayout';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component

const Profile = lazy(() => import('@pages/Profile/Profile'));
const SellerDashboard = lazy(() => import('@pages/SellerDashboard/Home/Home'));
const AdPosting = lazy(() => import('@pages/SellerDashboard/AdPosting/AdPosting'));

const LandingPage = lazy(() => import('@pages/LandingPage/LandingPage'));
const ShopsListing = lazy(() => import('@pages/FundraiseDashboard/Campaigns/ShopsListing'));
const NotFound = lazy(() => import('@pages/NotFound/NotFound'));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index exact element={<LandingPage />} />
      </Route>

      {/* Protected Routes for Seller */}
      <Route element={<ProtectedRoute  />}>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/services" exact element={<SellerDashboard />} />
          <Route path="/services/shop_listing" exact element={<ShopsListing />} />
          <Route path="/services/profile" exact element={<Profile />} />
          <Route path="/services/adpost" exact element={<AdPosting />} />
        </Route>
      </Route>

      {/* Catch all for Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
