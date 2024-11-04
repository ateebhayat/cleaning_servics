import React, { Suspense } from 'react';
import Loading from '../../components/Loading/Loading';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { useLocation, Outlet } from 'react-router-dom';

const PublicLayout = () => {
    // const { isLoggedIn } = useSelector((state) => state?.auth);

    // const navigate = useNavigate();

    // if (!isLoggedIn) navigate('/');
    let productId = '';
    const location = useLocation();
    const currentPathname = location.pathname;
    productId = location?.pathname?.match(/\/product\/(\d+)/)?.[1] || '';
    return (
        <React.Fragment>
            {/* Header */}
            <Header />
            <Suspense fallback={<Loading centered />}>
                <Outlet />
            </Suspense>
            {/* Footer */}
            {currentPathname !== '/chat' && productId === '' ? <Footer /> : null}
        </React.Fragment>
    );
};

export default PublicLayout;
