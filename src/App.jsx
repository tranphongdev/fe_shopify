import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import DetailProduct from './pages/DetailProduct/DetailProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shop from './pages/Shop/Shop';
import Login from './pages/Auth/Login';
import { PrivateRouter } from './routes/PrivateRouter';
import Checkout from './pages/Checkout/Checkout';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop/:id" element={<DetailProduct />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route element={<PrivateRouter />}>
                        <Route path="/cart" element={<Cart />} />
                    </Route>
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={300}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}

export default App;
