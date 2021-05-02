import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://dcoimbra-mobile.herokuapp.com/',
    timeout: 3500,
});
