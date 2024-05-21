import gucci from '../assets/gucci.png';
import versace from '../assets/versace.png';
import zara from '../assets/zara.png';
import prada from '../assets/prada.png';
import calvinklein from '../assets/calvinklein.png';

const navItems = [
    { title: 'Home', to: 'home' },
    { title: 'Shop', to: 'about' },
    { title: 'About', to: 'contact' },
    { title: 'Contact', to: 'product' },
];

const brands = [
    { title: 'Gucci', image: gucci },
    { title: 'Versace', image: versace },
    { title: 'zara', image: zara },
    { title: 'prada', image: prada },
    { title: 'calvinklein', image: calvinklein },
];

const reviews = [
    {
        id: 1,
        rating: 4,
        name: 'Sarah M.',
        review: 'Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.',
    },
    {
        id: 2,
        rating: 5,
        name: 'Alex K.',
        review: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
    },
    {
        id: 3,
        rating: 3.5,
        name: 'Sarah M.',
        review: 'Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.',
    },
    {
        id: 4,
        rating: 3,
        name: 'James L.',
        review: 'As someone who is always on the lookout for unique fashion pieces, Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.',
    },
    {
        id: 5,
        rating: 5,
        name: 'PhongDev.',
        review: 'Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.',
    },
];

export { brands, navItems, reviews };
