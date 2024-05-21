import ProductItem from './ProductItem/ProductItem';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Products({ data }) {
    return (
        <div>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="py-3"
            >
                {data?.map((product) => (
                    <SwiperSlide key={product?.id} className=" min-w-[200px]">
                        <ProductItem product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Products;
