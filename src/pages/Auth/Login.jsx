import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/features/authSlice';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, isError, errorMessage } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(login({ username, password })).unwrap();
            navigate('/');
        } catch (error) {
            console.error('Failed to login:', error);
        }
    };

    return (
        <div className="my-[200px]">
            <div className="text-[#333] wrapper">
                <div className="flex fle-col items-center justify-center">
                    <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
                        <div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                            <form className="space-y-6">
                                <div className="mb-10">
                                    <h3 className="text-4xl font-[Satoshi]">Login</h3>
                                    <p className="text-base mt-4">
                                        Sign in to your account and explore a world of possibilities. Your journey
                                        begins here.
                                    </p>
                                </div>
                                <div>
                                    <label className="mb-2 block font-[Satoshi]">User name - [phongdev]</label>
                                    <div className="relative flex items-center">
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            name="username"
                                            required
                                            className="w-full border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                                            placeholder="Enter user name"
                                        />
                                        <FaUser className="w-[18px] h-[18px] absolute right-4 text-[#bbb]" />
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-2 block font-[Satoshi]">Password - [123456]</label>
                                    <div className="relative flex items-center">
                                        <input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            name="password"
                                            type="password"
                                            required
                                            className="w-full border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                                            placeholder="Enter password"
                                        />
                                        <FaRegEye className="w-[18px] h-[18px] absolute right-4 cursor-pointer text-[#bbb]" />
                                    </div>
                                </div>
                                <div className="!mt-10">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isLoading}
                                        type="button"
                                        className="w-full shadow-xl py-2.5 px-4 rounded text-white bg-[#333] hover:bg-black focus:outline-none"
                                    >
                                        {isLoading ? 'Logging in...' : 'Login'}
                                    </button>
                                </div>
                                <p className="!mt-10 text-center">
                                    Do not have an account{' '}
                                    <Link
                                        to="/register"
                                        href=""
                                        className="text-blue-600 hover:underline ml-1 whitespace-nowrap"
                                    >
                                        Register here
                                    </Link>
                                </p>
                            </form>
                        </div>
                        <div className="lg:h-[400px] md:h-[300px] hidden md:block max-md:mt-10">
                            <img
                                src="https://readymadeui.com/login-image.webp"
                                className="w-full h-full object-cover"
                                alt="Dining Experience"
                            />
                        </div>
                    </div>
                </div>
                {isError && <div style={{ color: 'red' }}>{errorMessage}</div>}
            </div>
        </div>
    );
}

export default Login;
