import axios from "axios";

const API_KEY = '686ce405e78c10a98219cd1fc59d1c0f';
const API_URL = 'https://api.themoviedb.org/3/';

export const apiRequest = (path, parameter = {}) => {
    const params = Object.assign({ api_key: API_KEY }, parameter);
    try {
        const response = axios.get(API_URL + path, {params})
        return response;
    } catch (error) {
        console.log(error);
    }
}