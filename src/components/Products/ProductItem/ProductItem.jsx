import { Link } from 'react-router-dom';
import StarRating from '../../StarRating/StarRating';

function ProductItem({ product }) {
    return (
        <div className="cursor-pointer overflow-hidden shadow p-4 rounded-[20px]">
            <Link to={'/shop/' + product?.id} className="overflow-hidden rounded-[20px]">
                <img
                    src={product?.image}
                    alt=""
                    className="rounded-[20px] w-full hover:scale-[1.1] ease-in-out duration-300 h-[287px] object-cover"
                />
            </Link>

            <div className="mt-4 space-y-2">
                <h3 className="font-[Satoshi] capitalize line-clamp-1">{product?.title}</h3>
                <div className="flex gap-2">
                    <StarRating rating={product?.rating?.rate} />
                    <span className="font-[Satoshi]">
                        {product?.rating?.rate}/ <span className="text-[rgba(0, 0, 0, 0.60)]">5</span>{' '}
                    </span>
                </div>
                <div>
                    <span className="font-[Satoshi] text-xl font-semibold">${product?.price}</span>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
