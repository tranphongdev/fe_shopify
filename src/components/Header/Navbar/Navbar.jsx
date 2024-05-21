import { useState, useEffect, useRef } from 'react';

import { FaXmark } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { AiOutlineLogin } from 'react-icons/ai';
import { navItems } from '../../../constants';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();
    const { cartsValue } = useSelector((state) => state.allCart);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const activeNavLink = ({ isActive }) => {
        return isActive ? 'text-base font-[Satoshi] underline' : 'text-base font-[Satoshi]';
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav className="py-4 bg-white">
            <div className="wrapper">
                <div className="flex justify-between items-center gap-8">
                    <Link to="/" className="font-[IntegralCf] text-[24px]">
                        FE.SHOPIFY
                    </Link>

                    <ul className="hidden lg:flex space-x-12">
                        {navItems.map(({ title, to }) => (
                            <NavLink to={to} className={activeNavLink} key={to}>
                                {title}
                            </NavLink>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-[20px]">
                            <div className="relative">
                                <Link to="/cart">
                                    <IoCartOutline className="w-7 h-7 mt-1" />
                                </Link>
                                {cartsValue.length > 0 ? (
                                    <span className="absolute top-[-6px] right-[-14px] bg-red-600 text-xs leading-5 text-white w-5 h-5 text-center rounded-full">
                                        {cartsValue.length}
                                    </span>
                                ) : (
                                    ''
                                )}
                            </div>
                            <Link to="/login" className="hidden lg:block font-[Satoshi]">
                                Login <AiOutlineLogin className="w-6 h-6 inline-block" />
                            </Link>
                        </div>

                        {/* Mobile menu */}
                        <div className="lg:hidden">
                            <button onClick={toggleMenu}>
                                {isMenuOpen ? (
                                    <FaXmark className="w-6 h-6 mt-2" />
                                ) : (
                                    <FaBars className="w-6 h-6 mt-2" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu mobile */}
                <div
                    ref={menuRef}
                    className={`bg-black w-custom-width h-full text-white ${
                        isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
                    }`}
                >
                    <Link to="/" className="font-[IntegralCf] block text-[24px] py-4 px-4">
                        FE.SHOPIFY
                    </Link>
                    <ul className="space-y-2 border-b font-[Satoshi]">
                        {navItems.map(({ title, to }) => (
                            <Link to={to} key={to}>
                                <li className="py-3 px-4 hover:bg-[#484a4b]">{title}</li>
                            </Link>
                        ))}
                    </ul>
                    <button className="font-[Satoshi] mt-4 px-4">
                        Login <AiOutlineLogin className="w-6 h-6 inline-block" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
