import axios from "axios";

const url = `http://localhost:5000/api/collections/event`

export const fetchCollection = () => axios.get(url);
export const createEvent = (newEvent) => axios.post(url, newEvent);

export const addRunnerToEventApiRequest = (eventId,newRunner) => axios.post(`http://localhost:5000/api/collections/event/${eventId}/${newRunner}`); 
export const getEventApiRequest = (eventId) => axios.get(`http://localhost:5000/api/collections/event/${eventId}`); 
export const deleteEventApiRequest = (eventId) => axios.delete(`http://localhost:5000/api/collections/event/${eventId}`) 
export const updateEventApiRequest = (eventId, updatedEvent) => axios.put(`http://localhost:5000/api/collections/event/${eventId}`, updatedEvent); 
