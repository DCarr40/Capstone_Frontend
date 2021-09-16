import axios from "axios";

const url = `http://localhost:5000/api/collections/runner/`;
const url2 = `http://localhost:5000/api/collections/611ae85d52d8b50aeb01b515`;

export const getRunnerById = (loginRunner) => axios.get(url, loginRunner);
export const getRunnerById2 = (loginRunner) => axios.get(url2, loginRunner);
export const addEventToRunnerApiRequest = (eventId,runnerId) => axios.post(`http://localhost:5000/api/collections/${runnerId}/events/${eventId}`)
export const getRunnerApiRequest = (runnerId) => axios.get(`http://localhost:5000/api/collections/runner/${runnerId}`); 
