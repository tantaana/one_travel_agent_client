import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DownloadApp from '../Pages/Shared/DownloadApp/DownloadApp';
import Footer from '../Pages/Shared/Footer/Footer';
import Nav1 from '../Pages/Shared/Navbar/Nav1/Nav1';

const Main = () => {
    let location = useLocation();
    return (
        <div>
            <Nav1 />
            <Outlet />
            {
                location.pathname !== '/login'
                && location.pathname !== '/signup'
                && location.pathname !== '/dashboard'
                && location.pathname !== '/dashboard/add_banner'
                && <DownloadApp />
            }
            {
                location.pathname !== '/login'
                && location.pathname !== '/signup'
                && location.pathname !== '/dashboard'
                && location.pathname !== '/dashboard/add_banner'
                && <Footer />
            }

        </div>
    );
};

export default Main;