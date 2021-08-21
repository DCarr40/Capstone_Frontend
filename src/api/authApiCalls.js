import axios from "axios";

const url = `http://localhost:5000/api/collections/login`;
const url2 = `http://localhost:5000/api/collections/runner`;


export const loginApiCall = (loginInfo) => axios.post(url, loginInfo);
export const registerApiCall = (registerInfo) => axios.post(url2, registerInfo);