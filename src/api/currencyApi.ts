import Axios from 'axios';

export default Axios.create({
  baseURL: 'http://api.currencylayer.com',
  params: {
    access_key: '6b9273de35770dd96db54ee4f0687529',
    format: 1,
  },
});
