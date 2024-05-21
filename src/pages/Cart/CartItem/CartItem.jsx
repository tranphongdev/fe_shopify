import prd from '../../../assets/prd.png';
import { FaRegTrashAlt } from 'react-icons/fa';

import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';

function CartItem({ cart }) {
    console.log(cart);
    return (
        <>
            <div className="py-5 flex">
                <div className="flex w-[667px] gap-4">
                    <div className="w-[124px] h-[124px]">
                        <img
                            src={cart?.image}
                            alt={cart?.title}
                            className="w-full h-full object-cover rounded-[20px]"
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <h2 className="font-[Satoshi] line-clamp-1">{cart?.title}</h2>
                        <span className="font-[Satoshi] text-sm">
                            Size: <span className="text-gray-500">Large</span>
                        </span>
                        <span className="font-[Satoshi] text-sm">
                            Color: <span className="text-gray-500">Red</span>
                        </span>
                        <span className="font-[Satoshi]">${cart?.price}</span>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-center">
                    <button className="hover:text-red-600">
                        <FaRegTrashAlt className="w-5 h-5" />
                    </button>
                    <div className="flex items-center rounded-[62px] gap-2 lg:gap-4 bg-[#F0F0F0] text-center py-1">
                        <button className="w-7 h-7 px-2">
                            <FaMinus />
                        </button>
                        <span className="font-[Satoshi]">2</span>
                        <button className="w-7 h-7">
                            <FaPlus />
                        </button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default CartItem;
