import { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import TopHeader from './TopHeader/TopHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="w-full shadow fixed top-0 left-0 right-0 z-20">
                <div className={`${isSticky ? 'sticky top-0 left-0 right-0' : ''}`}>
                    <TopHeader />
                    <Navbar />
                </div>
            </header>
            <Outlet />
            <Footer />
        </>
    );
}

export default Header;
