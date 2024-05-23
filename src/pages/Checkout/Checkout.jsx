import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import Empty from '../../assets/emptycart.webp';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { deleteAllItem } from '../../redux/features/cartSlice';

function Checkout() {
    const navigate = useNavigate();
    const { cartsValue } = useSelector((state) => state.allCart);
    const [subTotal, setSubTotal] = useState(0);
    const [shipImg, setShipImg] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
    });
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const { firstName, lastName, email, phone, address, city, state, zipCode } = formData;
        if (
            firstName === '' ||
            lastName === '' ||
            email === '' ||
            phone === '' ||
            address === '' ||
            city === '' ||
            state === '' ||
            zipCode === ''
        ) {
            toast.error('Not Empty!');
        } else {
            navigate('/ship');
            dispatch(deleteAllItem());
        }
    };

    const caculateSubTotal = () => {
        let total = 0;
        cartsValue.forEach((item) => {
            total += item.price * item.qty;
        });
        setSubTotal(total);
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            [name]: value,
        });
    };

    useEffect(() => {
        caculateSubTotal();
    }, [cartsValue]);

    return (
        <div className="wrapper rounded-[20px] overflow-hidden">
            <div className=" my-40">
                <Breadcrumb className="mb-8">Checkout</Breadcrumb>
                {cartsValue.length > 0 ? (
                    <div className="flex max-sm:flex-col gap-4 h-full">
                        <div className="bg-gradient-to-r bg-black rounded-lg sm:h-screen sm:sticky sm:top-0 lg:min-w-[350px] sm:min-w-[300px]">
                            <div className="relative h-full">
                                <div className="p-4 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                                    <div className="space-y-4">
                                        {cartsValue?.map((item) => (
                                            <div key={item} className="flex items-start gap-4">
                                                <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-2 shrink-0 bg-gray-300 rounded-md">
                                                    <img src={item?.image} className="w-full object-contain" />
                                                </div>
                                                <div className="w-full">
                                                    <h3 className="text-base text-white">{item?.title}</h3>
                                                    <ul className="text-sm text-gray-300 space-y-1 mt-2">
                                                        <li className="flex flex-wrap gap-4">
                                                            Quantity <span className="ml-auto">{item?.qty}</span>
                                                        </li>
                                                        <li className="flex flex-wrap gap-4">
                                                            Total Price{' '}
                                                            <span className="ml-auto">${item?.price * item?.qty}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4 rounded-md">
                                    <h4 className="flex flex-wrap gap-4 text-base text-white">
                                        Total <span className="ml-auto">${subTotal}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto w-full h-max rounded-md p-4 sticky top-0">
                            <h2 className="text-2xl font-[Satoshi] text-gray-800">Complete your order</h2>
                            <div className="mt-8">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-800 mb-4">Personal Details</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="relative flex items-center">
                                            <input
                                                value={formData.firstName}
                                                onChange={handleOnChange}
                                                name="firstName"
                                                type="text"
                                                placeholder="First Name"
                                                className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                                            />
                                            <FaUser className="w-[18px] h-[18px] absolute right-4 text-[#bbb]" />
                                        </div>

                                        <div className="relative flex items-center">
                                            <input
                                                value={formData.lastName}
                                                onChange={handleOnChange}
                                                name="lastName"
                                                type="text"
                                                placeholder="Last Name"
                                                className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                                            />
                                            <FaUser className="w-[18px] h-[18px] absolute right-4 text-[#bbb]" />
                                        </div>

                                        <div className="relative flex items-center">
                                            <input
                                                value={formData.email}
                                                onChange={handleOnChange}
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                                className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                                            />
                                            <MdOutlineEmail className="w-[18px] h-[18px] absolute right-4 text-[#bbb]" />
                                        </div>

                                        <div className="relative flex items-center">
                                            <input
                                                value={formData.phone}
                                                onChange={handleOnChange}
                                                name="phone"
                                                type="number"
                                                placeholder="Phone No."
                                                className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                                            />
                                            <FaPhone className="w-[18px] h-[18px] absolute right-4 text-[#bbb]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-base font-semibold text-gray-800 mb-4">Shipping Address</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <input
                                            value={formData.address}
                                            onChange={handleOnChange}
                                            name="address"
                                            type="text"
                                            placeholder="Address Line"
                                            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                                        />
                                        <input
                                            value={formData.city}
                                            name="city"
                                            onChange={handleOnChange}
                                            type="text"
                                            placeholder="City"
                                            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                                        />
                                        <input
                                            value={formData.state}
                                            onChange={handleOnChange}
                                            name="state"
                                            type="text"
                                            placeholder="State"
                                            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                                        />
                                        <input
                                            value={formData.zipCode}
                                            onChange={handleOnChange}
                                            name="zipCode"
                                            type="text"
                                            placeholder="Zip Code"
                                            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                                        />
                                    </div>

                                    <div className="flex gap-4 max-md:flex-col mt-8">
                                        <button
                                            type="button"
                                            className="rounded-md px-4 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-gray-800 max-md:order-1"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleSubmit}
                                            type="button"
                                            className="rounded-md px-4 py-3 w-full text-sm font-semibold bg-gray-800 text-white hover:bg-gray-900"
                                        >
                                            Complete Purchase
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="">
                        <img src={Empty} alt="not cart" className="mx-auto" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Checkout;
