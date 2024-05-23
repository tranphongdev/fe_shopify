// src/routes/PrivateRouter.js
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export const PrivateRouter = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!user) {
            toast.warning('Login view cart');
            navigate('/login');
        }
    }, [user, navigate]);

    return user ? <Outlet /> : null;
};
