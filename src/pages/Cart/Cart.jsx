import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Title from '../../components/Title/Title';
import CartItem from './CartItem/CartItem';
import NoCart from '../../assets/nocart.svg';

import { LuMoveRight } from 'react-icons/lu';
import { deleteAllItem } from '../../redux/features/cartSlice';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
    const dispatch = useDispatch();
    const { cartsValue } = useSelector((state) => state.allCart);
    const [subTotal, setSubTotal] = useState(0);

    const caculateSubTotal = () => {
        let total = 0;
        cartsValue.forEach((item) => {
            total += item.price * item.qty;
        });
        setSubTotal(total);
    };

    useEffect(() => {
        caculateSubTotal();
    }, [cartsValue]);

    const handleDeleteAll = () => {
        if (cartsValue.length > 0) {
            dispatch(deleteAllItem());
            toast.success('Delete Success!');
        } else {
            toast.error('Item not found');
        }
    };

    return (
        <div className="my-[124px]">
            <div className="wrapper">
                <Breadcrumb className="">Cart</Breadcrumb>

                {cartsValue.length > 0 ? (
                    <>
                        <div className="flex items-center justify-between lg:flex-row flex-col">
                            <Title className="text-[40px] my-6 text-center lg:text-left">Your cart</Title>
                            <div>
                                <button
                                    onClick={handleDeleteAll}
                                    className="gap-2 mb-4 flex items-center justify-center py-4 px-[54px] rounded-[62px] bg-black text-white"
                                >
                                    Delete All Product
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col justify-between gap-5 ">
                            <div className="border rounded-[20px] px-6 h-fit">
                                {cartsValue?.map((cart) => (
                                    <CartItem key={cart.id} cart={cart} />
                                ))}
                            </div>

                            <div className="flex-1 border rounded-[20px] p-6 space-y-6">
                                <h3 className="font-[Satoshi] text-3xl">Order Summary</h3>
                                <div className="flex justify-between items-center">
                                    <span>Subtotal</span>
                                    <span className="font-[Satoshi] text-xl">${subTotal}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Discount (-0%)</span>
                                    <span className="font-[Satoshi] text-red-600">$0</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Delivery Fee</span>
                                    <span className="font-[Satoshi] text-red-600">$0</span>
                                </div>
                                <div className="flex justify-between items-center border-t-2 pt-2 pb-6">
                                    <span className="font-[Satoshi] text-lg">Total</span>
                                    <span className="font-[Satoshi] text-2xl">${subTotal}</span>
                                </div>

                                <Link to="/checkout">
                                    <button className="w-full gap-2 flex items-center justify-center py-4 px-[54px] rounded-[62px] bg-black text-white">
                                        Go to Checkout
                                        <LuMoveRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex justify-center mb-[14rem]">
                        <img className="text-center mt-16" src={NoCart} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
