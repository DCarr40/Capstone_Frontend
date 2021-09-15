import axios from "axios";

const url = `http://localhost:5000/api/collections/event`

export const fetchCollection = () => axios.get(url);
export const createEvent = (newEvent) => axios.post(url, newEvent);

export const addRunnerToEventApiRequest = (eventId,newRunner) => axios.post(`http://localhost:5000/api/collections/event/${eventId}/${newRunner}`); 
