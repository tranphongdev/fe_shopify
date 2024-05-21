import { useState, useEffect, useRef } from 'react';

import { FaXmark } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { AiOutlineLogin } from 'react-icons/ai';
import { navItems } from '../../../constants';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                    <h2 className="font-[IntegralCf] text-[24px]">FE.SHOPIFY</h2>

                    <ul className="hidden lg:flex space-x-12">
                        {navItems.map(({ title, to }) => (
                            <li className="text-base font-[Satoshi]" key={to}>
                                {title}
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-[20px]">
                            <div className="relative">
                                <button className="">
                                    <IoCartOutline className="w-7 h-7 mt-1" />
                                </button>
                                <span className="absolute top-[-6px] right-[-14px] bg-red-600 text-xs leading-5 text-white w-5 h-5 text-center rounded-full">
                                    2
                                </span>
                            </div>
                            <button className="hidden lg:block font-[Satoshi]">
                                Login <AiOutlineLogin className="w-6 h-6 inline-block" />
                            </button>
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
                    <h2 className="font-[IntegralCf] text-[24px] py-4 px-4">FE.SHOPIFY</h2>
                    <ul className="space-y-2 border-b font-[Satoshi]">
                        {navItems.map(({ title, to }) => (
                            <li key={to} className="py-3 px-4 hover:bg-[#484a4b]">
                                {title}
                            </li>
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
