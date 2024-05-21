import ProductItem from './ProductItem/ProductItem';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Products() {
    return (
        <div>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="py-3"
            >
                <SwiperSlide className=" min-w-[200px]">
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide className=" min-w-[200px]">
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide className=" min-w-[200px]">
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide className=" min-w-[200px]">
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide className=" min-w-[200px]">
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide className=" min-w-[200px]">
                    <ProductItem />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Products;
