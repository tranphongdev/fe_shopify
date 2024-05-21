import Title from '../Title/Title';
import ReviewCard from './ReviewCard/ReviewCard';

function Reviews() {
    return (
        <div className="wrapper">
            <div className="mt-[64px]">
                <Title className=" text-[32px] lg:text-[40px] text-center lg:text-left">OUR HAPPY CUSTOMERS</Title>
                <ReviewCard />
            </div>
        </div>
    );
}

export default Reviews;
