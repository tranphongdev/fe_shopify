import { Outlet, useNavigate } from 'react-router-dom';

export const PrivateRouter = () => {
    const navigate = useNavigate();
    const isLogin = true;
    return <div>{isLogin ? <Outlet /> : navigate('/login')}</div>;
};
