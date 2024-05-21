import Products from '../../../components/Products/Products';
import Title from '../../../components/Title/Title';

function Arrivals({ data }) {
    return (
        <div className="wrapper">
            <div className="py-[64px]">
                <Title className="text-center text-[32px] lg:text-[40px] mb-[64px]">NEW ARRIVALS</Title>
                <Products data={data} />
                <div className="text-center mt-[36px] pb-[64px] border-b">
                    <button className="font-[Satoshi] px-[54px] py-4 border rounded-[62px] w-full lg:w-auto">
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Arrivals;
