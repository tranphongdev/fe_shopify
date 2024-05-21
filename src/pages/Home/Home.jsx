import Reviews from '../../components/Reviews/Reviews';
import Arrivals from './Arrivals/Arrivals';
import Banner from './Banner/Banner';
import Brand from './Brand/Brand';
import Browser from './Browser/Browser';
import TopSelling from './TopSelling/TopSelling';

function Home() {
    return (
        <div className="mt-[100px] mb-[160px]">
            <Banner />
            <Brand />
            <Arrivals />
            <TopSelling />
            <Browser />
            <Reviews />
        </div>
    );
}

export default Home;
