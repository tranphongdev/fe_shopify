import StarRating from '../../../StarRating/StarRating';
import Check from '../../../../assets/check.png';

function Card({ review }) {
    return (
        <div className="rounded-[20px] border py-[28px] px-[32px]">
            <StarRating rating={review?.rating} />
            <div className="flex my-5 items-center gap-2">
                <span className="font-[Satoshi]">{review?.name}</span>
                <img src={Check} alt="" className="w-6 h-6 object-cover" />
            </div>
            <p className="line-clamp-4">{review?.review}</p>
        </div>
    );
}

export default Card;
