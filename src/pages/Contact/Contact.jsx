import { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { toast } from 'react-toastify';

function Contact() {
    const [formValues, setFormValues] = useState({
        fullName: '',
        street: '',
        phoneNo: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.fullName = formValues.fullName ? '' : 'Full Name is required.';
        tempErrors.street = formValues.street ? '' : 'Street is required.';
        tempErrors.phoneNo = formValues.phoneNo ? '' : 'Phone No. is required.';
        tempErrors.email = formValues.email ? '' : 'Email is required.';
        tempErrors.message = formValues.message ? '' : 'Message is required.';

        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setFormValues({
                fullName: '',
                street: '',
                phoneNo: '',
                email: '',
                message: '',
            });
            toast.success('Send Message successfully!');
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang khi id thay đổi và được load
    }, []);

    return (
        <div className="wrapper">
            <div className="my-[140px] grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl bg-white text-black before:absolute before:right-0 before:w-[300px] before:bg-blue-400 before:h-full max-md:before:hidden">
                <div>
                    <h2 className="text-3xl font-extrabold">Get In Touch</h2>
                    <p className="text-sm text-gray-400 mt-3">
                        Have a specific inquiry or looking to explore new opportunities? Our experienced team is ready
                        to engage with you.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4 mt-8">
                            <input
                                type="text"
                                name="fullName"
                                value={formValues.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className={`px-2 py-3 bg-white w-full text-sm border-b-2 ${
                                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                                } focus:border-[#333] outline-none`}
                            />
                            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}

                            <input
                                type="text"
                                name="street"
                                value={formValues.street}
                                onChange={handleChange}
                                placeholder="Street"
                                className={`px-2 py-3 bg-white w-full text-sm border-b-2 ${
                                    errors.street ? 'border-red-500' : 'border-gray-300'
                                } focus:border-[#333] outline-none`}
                            />
                            {errors.street && <p className="text-red-500 text-xs">{errors.street}</p>}

                            <input
                                type="number"
                                name="phoneNo"
                                value={formValues.phoneNo}
                                onChange={handleChange}
                                placeholder="Phone No."
                                className={`px-2 py-3 bg-white text-black w-full text-sm border-b-2 ${
                                    errors.phoneNo ? 'border-red-500' : 'border-gray-300'
                                } focus:border-[#333] outline-none`}
                            />
                            {errors.phoneNo && <p className="text-red-500 text-xs">{errors.phoneNo}</p>}

                            <input
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className={`px-2 py-3 bg-white text-black w-full text-sm border-b-2 ${
                                    errors.email ? 'border-red-500' : 'border-gray-300'
                                } focus:border-[#333] outline-none`}
                            />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                            <textarea
                                name="message"
                                value={formValues.message}
                                onChange={handleChange}
                                placeholder="Write Message"
                                className={`px-2 pt-3 bg-white text-black w-full text-sm border-b-2 ${
                                    errors.message ? 'border-red-500' : 'border-gray-300'
                                } focus:border-[#333] outline-none`}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semibold bg-[#333] text-white hover:bg-[#222]"
                        >
                            Send Message
                        </button>
                    </form>
                    <ul className="mt-4 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
                        <li className="flex items-center hover:text-blue-500">
                            <MdOutlineEmail className="w-6 h-6 text-gray-500" />
                            <a href="mailto:dinhphong.work@gmail.com" className="text-current text-sm ml-3">
                                <strong>dinhphong.work@gmail.com</strong>
                            </a>
                        </li>
                        <li className="flex items-center text-current hover:text-blue-500">
                            <FaPhone className="w-4 h-4 text-gray-500" />
                            <a href="tel:0981972202" className="text-current text-sm ml-3">
                                <strong>098 197 2202</strong>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="z-10 relative h-full max-md:min-h-[350px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59826.433979918256!2d106.0889568557754!3d20.417820162389933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e0adb8d5f1cd%3A0xb5f4baba00e67462!2zTmFtIMSQ4buLbmgsIE5hbSBEaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2sus!4v1716454808208!5m2!1sen!2sus"
                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
