import { useEffect } from 'react';
import ship from '../../../assets/giaohang.webp';
import { toast } from 'react-toastify';

function Shipping() {
    useEffect(() => {
        toast.success('Order is being shipped');
    }, []);
    return (
        <div className="my-40 flex flex-col justify-center items-center gap-5">
            <p className="capitalize font-[Satoshi] text-red-600">Order is being shipped</p>
            <img src={ship} className="w-[400px]" alt="" />
        </div>
    );
}

export default Shipping;
