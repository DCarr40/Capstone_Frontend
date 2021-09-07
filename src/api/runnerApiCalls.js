import axios from "axios";

const url = `http://localhost:5000/api/collections/runner/`;
const url2 = `http://localhost:5000/api/collections/611ae85d52d8b50aeb01b515`;

export const getRunnerById = (loginRunner) => axios.get(url, loginRunner);
export const getRunnerById2 = (loginRunner) => axios.get(url2, loginRunner);
export const addEventToRunnerApiRequest = (event) => axios.post(url,event)