import axios from 'axios';

const URL = 'https://fakestoreapi.com/products';

const ApiServices = {
    API_GET_ALL_PRODUCT: async () => {
        return await axios(URL);
    },
};

export default ApiServices;
