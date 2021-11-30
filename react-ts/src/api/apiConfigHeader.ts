
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/'
const  token  = localStorage.getItem("tokenhome")
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
export default axios;
