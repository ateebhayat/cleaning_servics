import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '@layout/DashboardLayout/DashboardLayout';
import PublicLayout from '@layout/PublicLayout/PublicLayout';

const Home = lazy(() => import('@pages/AdminDashbord/Home/Home'));
const UserManagement = lazy(() => import('@pages/AdminDashbord/UserManagement/UserManagement'));
const Profile = lazy(() => import('@pages/Profile/Profile'));
const CompaignManagement = lazy(() => import('@pages/AdminDashbord/CompaignManagement/CompaignManagement'));
const CompaignDetail = lazy(() => import('@pages/AdminDashbord/CompaignManagement/CompaignDetail'));
const EditCampaign = lazy(() => import('@pages/AdminDashbord/CompaignManagement/EditCampaign'));
const SellerDashboard = lazy(() => import('@pages/SellerDashboard/Home/Home'));
const ProductListing = lazy(() => import('@pages/SellerDashboard/ProductListing/ProductListing'));
const SingleProduct = lazy(() => import('@pages/SellerDashboard/SingleProduct/SingleProduct'));
const AdPosting = lazy(() => import('@pages/SellerDashboard/AdPosting/AdPosting'));
const ProductManagement = lazy(() => import('@pages/AdminDashbord/ProductManagement/ProductManagement'));
const TransactionsHistory = lazy(() => import('@pages/AdminDashbord/TransactionsHistory/TransactionsHistory'));
const FundRaise = lazy(() => import('@pages/FundraiseDashboard/FundRaise'));
const CauseCampaignsManagement = lazy(() => import('@pages/FundraiseDashboard/Campaigns/CampaignsManagement'));
const CauseProductsManagement = lazy(() => import('@pages/FundraiseDashboard/Products/ProductsManagement'));
const CauseProductDetail = lazy(() => import('@pages/FundraiseDashboard/Products/ProductDetail'));
const AdminProductDetail = lazy(() => import('@pages/AdminDashbord/ProductManagement/ProductDetail'));
const SavedProducts = lazy(() => import('@pages/Saved/SavedProducts'));

const AddCampaign = lazy(() => import('@pages/FundraiseDashboard/Campaigns/AddCampaign'));
const EditCampaignFundRaiser = lazy(() => import('@pages/FundraiseDashboard/Campaigns/EditCampaign'));
const CauseTransactionsHistory = lazy(() => import('@pages/FundraiseDashboard/Transactions/TransactionsHistory'));
const Login = lazy(() => import('@pages/Auth/Login'));
const Signup1 = lazy(() => import('@pages/Auth/Signup1'));
const Login1 = lazy(() => import('@pages/Auth/Login1'));
const SignUp = lazy(() => import('@pages/Auth/SignUp'));
const LandingPage = lazy(() => import('@pages/LandingPage/LandingPage'));
const ProductsPage = lazy(() => import('@pages/Products/Products'));
const ProductDetailPage = lazy(() => import('@pages/Products/ProductDetail'));
const CampaignDetailPage = lazy(() => import('@pages/Campaigns/CampaignDetail'));

const CampaignsPage = lazy(() => import('@pages/Campaigns/Campaigns'));
const ChatsPage = lazy(() => import('@pages/Chat/Chat'));
const About = lazy(() => import('@pages/AboutUs/About'));
const Contact = lazy(() => import('@pages/Contact/Contact'));
const NotFound = lazy(() => import('@pages/NotFound/NotFound'));

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route index exact element={<LandingPage />} />
                <Route path="about-us" exact element={<About />} />
                <Route path="contact-us" exact element={<Contact />} />
                <Route path="products" exact element={<ProductsPage />} />
                <Route path="product/:id" exact element={<ProductDetailPage />} />
                <Route path="campaign/:id" exact element={<CampaignDetailPage />} />
                <Route path="wishlist" exact element={<SavedProducts />} />
                <Route path="campaigns" exact element={<CampaignsPage />} />
                <Route path="chat" exact element={<ChatsPage />} />
                <Route path="login" exact element={<Login />} />
                <Route path="login1" exact element={<Login1 />} />
                <Route path="signup" exact element={<SignUp />} />
                <Route path="signup1" exact element={<Signup1 />} />
            </Route>
            {/* @TODO
             protected layout
              */}
            <Route path="/" element={<DashboardLayout />}>
                {/* Funraise Dashboard routes */}
                <Route path="fundraise" exact element={<FundRaise />} />
                <Route path="/fundraise/campaigns_management" exact element={<CauseCampaignsManagement />} />
                <Route path="/fundraise/products_management" exact element={<CauseProductsManagement />} />
                <Route path="/fundraise/products_management/:id" exact element={<CauseProductDetail />} />
                <Route path="/fundraise/transactions_history" exact element={<CauseTransactionsHistory />} />
                <Route path="/fundraise/campaign/add" exact element={<AddCampaign />} />
                <Route path="/fundraise/campaign/edit" exact element={<EditCampaignFundRaiser />} />
                {/* Admin Dashboard routes */}
                <Route path="/campaign_management" exact element={<CompaignManagement />} />
                <Route path="/compaign/:id" exact element={<CompaignDetail />} />
                <Route path="/products_management/:id" exact element={<AdminProductDetail />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/compaign_management" exact element={<CompaignManagement />} />
                <Route path="/product_management" exact element={<ProductManagement />} />
                <Route path="/user_management" exact element={<UserManagement />} />
                <Route path="/transactions_history" exact element={<TransactionsHistory />} />
                <Route path="/profile" exact element={<Profile />} />
                <Route path="/editcompaign/:id" exact element={<EditCampaign />} />
                {/* -------------------------------- Seller Routes -------------------------------- */}
                <Route path="/seller" exact element={<SellerDashboard />} />
                <Route path="/sellerchat" exact element={<ChatsPage />} />
                <Route path="/product_listing" exact element={<ProductListing />} />
                <Route path="/product_listing/:id" exact element={<SingleProduct />} />
                <Route path="/adpost" exact element={<AdPosting />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default MainRoutes;
