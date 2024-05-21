import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheck } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import StarRating from '../../components/StarRating/StarRating';
import Title from '../../components/Title/Title';
import prd from '../../assets/prd.png';
import TopSelling from '../Home/TopSelling/TopSelling';
import Card from '../../components/Reviews/ReviewCard/Card/Card';
import { reviews } from '../../constants';
import { useParams } from 'react-router-dom';
import ApiServices from '../../apis';
import { addToCart } from '../../redux/features/cartSlice';
import { toast } from 'react-toastify';

function DetailProduct() {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [data, setData] = useState({});
    const { id } = useParams();
    const dispatch = useDispatch();

    const getData = async () => {
        const response = await ApiServices.API_GET_DETAIL_PRODUCT(id);
        setData(response.data);
    };

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang khi id thay đổi và được load
    }, [id]);

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };
    const products = useSelector((state) => state.products.products);
    const productsSelling = products.slice(10);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Add to cart success');
    };

    return (
        <div className="my-[124px]">
            <div className="wrapper">
                <Breadcrumb className="capitalize">{data?.category}</Breadcrumb>

                <div className="flex flex-col lg:flex-row gap-14 mt-9 pb-8">
                    <div className="lg:w-[450px] w-[300px] mx-auto">
                        <img src={data?.image} alt="" className="w-full rounded-[20px]" />
                    </div>

                    <div className="flex-1">
                        {/* Details */}
                        <Title className="text-[40px] mb-3 line-clamp-2">{data?.title}</Title>
                        <StarRating rating={5} />
                        <span className="my-3 block font-[Satoshi] text-[32px]">${data?.price}</span>
                        <span className="my-3 block font-[Satoshi] text-base capitalize">
                            Category: {data?.category}
                        </span>
                        <p className="pb-4 border-b">{data?.description}</p>

                        {/* Choose Color */}
                        <div className="py-4 border-b">
                            <p className="mb-2">Select Colors</p>
                            <div className="flex items-center gap-4">
                                <div
                                    className={`w-[37px] h-[37px] cursor-pointer rounded-full bg-[#4F4631] ${
                                        selectedColor === '#4F4631' ? 'text-white' : 'text-transparent'
                                    }`}
                                    onClick={() => handleColorClick('#4F4631')}
                                >
                                    <FaCheck className="w-[20px] mx-auto h-[37px]" />
                                </div>
                                <div
                                    className={`w-[37px] h-[37px] cursor-pointer rounded-full bg-[#314F4A] ${
                                        selectedColor === '#314F4A' ? 'text-white' : 'text-transparent'
                                    }`}
                                    onClick={() => handleColorClick('#314F4A')}
                                >
                                    <FaCheck className="w-[20px] mx-auto h-[37px]" />
                                </div>
                                <div
                                    className={`w-[37px] h-[37px] cursor-pointer rounded-full bg-[#31344F] ${
                                        selectedColor === '#31344F' ? 'text-white' : 'text-transparent'
                                    }`}
                                    onClick={() => handleColorClick('#31344F')}
                                >
                                    <FaCheck className="w-[20px] mx-auto h-[37px]" />
                                </div>
                            </div>
                        </div>

                        {/* Choose Size */}
                        <div className="py-4 border-b">
                            <p className="mb-2">Choose Size</p>
                            <div className="flex items-center gap-4 flex-wrap">
                                <span
                                    className={`block cursor-pointer px-6 py-3 rounded-[62px] font-semibold ${
                                        selectedSize === 'Small' ? 'bg-black text-white' : 'bg-[#F0F0F0] text-black'
                                    }`}
                                    onClick={() => handleSizeClick('Small')}
                                >
                                    Small
                                </span>
                                <span
                                    className={`block cursor-pointer px-6 py-3 rounded-[62px] font-semibold ${
                                        selectedSize === 'Medium' ? 'bg-black text-white' : 'bg-[#F0F0F0] text-black'
                                    }`}
                                    onClick={() => handleSizeClick('Medium')}
                                >
                                    Medium
                                </span>
                                <span
                                    className={`block cursor-pointer px-6 py-3 rounded-[62px] font-semibold ${
                                        selectedSize === 'Large' ? 'bg-black text-white' : 'bg-[#F0F0F0] text-black'
                                    }`}
                                    onClick={() => handleSizeClick('Large')}
                                >
                                    Large
                                </span>
                                <span
                                    className={`block cursor-pointer px-6 py-3 rounded-[62px] font-semibold ${
                                        selectedSize === 'X-Large' ? 'bg-black text-white' : 'bg-[#F0F0F0] text-black'
                                    }`}
                                    onClick={() => handleSizeClick('X-Large')}
                                >
                                    X-Large
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => handleAddToCart(data)}
                            className="px-[70px] py-4 bg-black text-white rounded-[62px] mt-4"
                        >
                            Add to card
                        </button>
                    </div>
                </div>

                {/* Review */}
                <div className="py-8 border-t">
                    <div className="flex justify-between items-center pb-8">
                        <div className="flex gap-1 items-center">
                            <h3 className="font-[Satoshi] text-xl">All Reviews</h3>
                            <span>(5)</span>
                        </div>
                        <button className="block py-3 px-5 bg-black text-white rounded-[62px]">Write a Review</button>
                    </div>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="py-3"
                    >
                        {reviews?.map((review) => (
                            <SwiperSlide key={review?.id} className="min-w-[310px]">
                                <Card review={review} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Top selling */}
            <div className="mt-[60px]">
                <TopSelling data={productsSelling} />
            </div>
        </div>
    );
}

export default DetailProduct;
