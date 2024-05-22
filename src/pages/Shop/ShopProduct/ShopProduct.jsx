import ProductItem from '../../../components/Products/ProductItem/ProductItem';

function ShopProduct({ data }) {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {data.map((item) => (
                <ProductItem key={item?.id} product={item} />
            ))}
        </div>
    );
}

export default ShopProduct;
