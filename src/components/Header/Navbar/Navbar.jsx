import { useState, useEffect, useRef } from 'react';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { FaUserLarge } from 'react-icons/fa6';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

import { FaXmark } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { AiOutlineLogin } from 'react-icons/ai';
import { navItems } from '../../../constants';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/features/authSlice';

function Navbar() {
    const user = useSelector((state) => state.auth.user);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();
    const { cartsValue } = useSelector((state) => state.allCart);
    const dispatch = useDispatch();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const activeNavLink = ({ isActive }) => {
        return isActive ? 'text-base font-[Satoshi] underline' : 'text-base font-[Satoshi]';
    };

    const handleLogout = () => {
        dispatch(logout());
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
                            {user ? (
                                <>
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
                                                <FaUserLarge />
                                                <p>{user.username}</p>
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/profile"
                                                                className={classNames(
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm',
                                                                )}
                                                            >
                                                                Profile
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/checkout"
                                                                className={classNames(
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm',
                                                                )}
                                                            >
                                                                Checkout order
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={handleLogout}
                                                                className={classNames(
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                    'block w-full px-4 py-2 text-left text-sm',
                                                                )}
                                                            >
                                                                Sign out
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </>
                            ) : (
                                <Link to="/login" className="hidden lg:block font-[Satoshi]">
                                    Login <AiOutlineLogin className="w-6 h-6 inline-block" />
                                </Link>
                            )}
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
