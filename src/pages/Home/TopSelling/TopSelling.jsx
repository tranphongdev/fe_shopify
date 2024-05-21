import Products from '../../../components/Products/Products';
import Title from '../../../components/Title/Title';

function TopSelling({ data }) {
    return (
        <div className="wrapper">
            <Title className="text-center text-[32px] lg:text-[40px] mb-[64px] uppercase">Top Selling</Title>

            <Products data={data} />
            <div className="text-center mt-[36px]">
                <button className="font-[Satoshi] px-[54px] py-4 border rounded-[62px] w-full lg:w-auto  mb-[64px]">
                    View All
                </button>
            </div>
        </div>
    );
}

export default TopSelling;
