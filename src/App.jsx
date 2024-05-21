import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
