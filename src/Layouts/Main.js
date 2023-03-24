import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DownloadApp from '../Pages/Shared/DownloadApp/DownloadApp';
import Nav1 from '../Pages/Shared/Navbar/Nav1/Nav1';

const Main = () => {
    let location = useLocation();
    return (
        <div>
            <Nav1 />
            <Outlet />
            <DownloadApp />
        </div>
    );
};

export default Main;