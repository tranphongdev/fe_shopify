import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Reviews from '../../components/Reviews/Reviews';
import Arrivals from './Arrivals/Arrivals';
import Banner from './Banner/Banner';
import Brand from './Brand/Brand';
import Browser from './Browser/Browser';
import TopSelling from './TopSelling/TopSelling';
import ApiServices from '../../apis';
import { setDataProduct } from '../../redux/features/productSlice';

function Home() {
    const dispatch = useDispatch();
    const getData = async () => {
        const response = await ApiServices.API_GET_ALL_PRODUCT();
        dispatch(setDataProduct(response.data));
    };

    const products = useSelector((state) => state.products.products);
    const productsArrivals = products.slice(0, 10);
    const productsSelling = products.slice(10);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="mt-[100px] mb-[160px]">
            <Banner />
            <Brand />
            <Arrivals data={productsArrivals} />
            <TopSelling data={productsSelling} />
            <Browser />
            <Reviews />
        </div>
    );
}

export default Home;
