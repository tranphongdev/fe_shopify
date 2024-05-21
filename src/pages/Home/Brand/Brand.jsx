import { brands } from '../../../constants';

function Brand() {
    return (
        <div className="lg:py-[45px] py-[35px] bg-black overflow-x-auto">
            <div className="wrapper flex justify-between gap-10">
                {brands.map((brand, index) => (
                    <img key={index} src={brand?.image} alt={brand?.title} />
                ))}
            </div>
        </div>
    );
}

export default Brand;
