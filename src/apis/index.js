import axios from 'axios';

const URL = 'https://fakestoreapi.com/products';

const ApiServices = {
    API_GET_ALL_PRODUCT: async () => {
        return await axios(URL);
    },
    API_GET_DETAIL_PRODUCT: async (id) => {
        return await axios(`${URL}/${id}`);
    },
};

export default ApiServices;
