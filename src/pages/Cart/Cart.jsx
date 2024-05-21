import { useSelector } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Title from '../../components/Title/Title';
import CartItem from './CartItem/CartItem';

import { LuMoveRight } from 'react-icons/lu';

function Cart() {
    const { cartsValue } = useSelector((state) => state.allCart);
    return (
        <div className="my-[124px]">
            <div className="wrapper">
                <Breadcrumb className="">Cart</Breadcrumb>
                <Title className="text-[40px] my-6 text-center lg:text-left">Your cart</Title>

                {cartsValue.length > 0 ? (
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
                                <span className="font-[Satoshi] text-xl">$240</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Discount (-0%)</span>
                                <span className="font-[Satoshi] text-red-600">$0</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Delivery Fee</span>
                                <span className="font-[Satoshi] text-red-600">$0</span>
                            </div>
                            <div className="flex justify-between items-center border-b-2 pb-6">
                                <span className="font-[Satoshi] text-lg">Total</span>
                                <span className="font-[Satoshi] text-2xl">$240</span>
                            </div>

                            <button className="w-full gap-2 flex items-center justify-center py-4 px-[54px] rounded-[62px] bg-black text-white">
                                Go to Checkout
                                <LuMoveRight />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center mb-[14rem]">
                        <img
                            className="text-center"
                            src="https://lh3.googleusercontent.com/proxy/EPYDPGgGgfXeP3-wFyR25aK4Tm5DQt4S6XKXu6_XEbZY_g7NAeMKVmLK6WY4f3cNbWrgj6jR6GunaMSFuCg1J3a1qOBbXpdoBodHS9E"
                            alt=""
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
