import prd from '../../../assets/prd.png';
import StarRating from '../../StarRating/StarRating';

function ProductItem() {
    return (
        <div className="cursor-pointer overflow-hidden">
            <div className="overflow-hidden rounded-[20px]">
                <img src={prd} alt="" className="rounded-[20px] hover:scale-[1.1] ease-in-out duration-300" />
            </div>

            <div className="mt-4 space-y-2">
                <h3 className="font-[Satoshi] capitalize line-clamp-2">T-shirt with tape details</h3>
                <div className="flex gap-2">
                    <StarRating rating={3.9} />
                    <span className="font-[Satoshi]">
                        5/ <span className="text-[rgba(0, 0, 0, 0.60)]">5</span>{' '}
                    </span>
                </div>
                <div>
                    <span className="font-[Satoshi] text-xl font-semibold">$240</span>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
