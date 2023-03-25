import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'
import Loader from '../../Pages/Shared/Loader/Loader';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader />
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to='/signup' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;