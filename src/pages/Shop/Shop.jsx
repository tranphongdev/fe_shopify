import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { useSelector } from 'react-redux';
import ShopProduct from './ShopProduct/ShopProduct';

function Shop() {
    const products = useSelector((state) => state.products.products);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOption, setSortOption] = useState('default');
    const categories = Array.from(new Set(products.map((item) => item.category)));

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const filteredProducts = selectedCategory
        ? products.filter((item) => item.category === selectedCategory)
        : products;

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === 'priceAsc') {
            return a.price - b.price;
        } else if (sortOption === 'priceDesc') {
            return b.price - a.price;
        } else if (sortOption === 'nameAsc') {
            return a.title.localeCompare(b.title);
        } else if (sortOption === 'nameDesc') {
            return b.title.localeCompare(a.title);
        } else {
            return 0;
        }
    });

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang khi id thay đổi và được load
    }, []);

    return (
        <div className="my-[135px]">
            <div className="wrapper">
                <Breadcrumb className="mb-7">Shop</Breadcrumb>

                <div>
                    <div className="flex justify-between lg:flex-row flex-col gap-5">
                        <div className="m-2 overflow-hidden max-w-[247px] lg:m-0 mx-auto border h-fit rounded-[20px] w-full">
                            <h3 className="font-[Satoshi] text-xl px-3 py-4">Filter</h3>
                            <div className="border-b">
                                {categories.map((category) => (
                                    <p
                                        className="p-3 hover:bg-[#eee] capitalize font-[Satoshi] text-[#4d4d4d]"
                                        key={category}
                                        onClick={() => handleCategoryClick(category)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {category}
                                    </p>
                                ))}
                            </div>
                            <div className="border-b p-3">
                                <h3 className="font-[Satoshi] text-xl py-4">Sort by</h3>
                                <select
                                    className="border rounded p-2 w-full"
                                    value={sortOption}
                                    onChange={handleSortChange}
                                >
                                    <option value="default">Default</option>
                                    <option value="priceAsc">Price: Low to High</option>
                                    <option value="priceDesc">Price: High to Low</option>
                                    <option value="nameAsc">Name: A to Z</option>
                                    <option value="nameDesc">Name: Z to A</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex-grow">
                            <ShopProduct data={sortedProducts} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
