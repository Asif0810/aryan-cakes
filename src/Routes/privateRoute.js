import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Context } from '../Context/AuthProvaider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Context)
    const location = useLocation();

    if (loading) {
        return <div>
            loading...
        </div>

    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    else {
        return children
    }
};

export default PrivateRoute;