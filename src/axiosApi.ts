import axios from "axios";

const axiosApi = axios.create({
    baseURL: "http://146.185.154.90:8000/"
});

export default axiosApi;