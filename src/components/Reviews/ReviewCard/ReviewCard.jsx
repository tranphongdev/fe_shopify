import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Card from './Card/Card';
import { reviews } from '../../../constants';

function ReviewCard() {
    return (
        <>
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
        </>
    );
}

export default ReviewCard;
