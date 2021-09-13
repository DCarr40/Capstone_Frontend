import axios from "axios";

export const url = `http://localhost:5000/api/collections/groups`;



export const getAllRunGroupsRequest = () => axios.get(url);
export const createRunGroup = (newRunGroup) => axios.post(url, newRunGroup);

export const addRunnerToRunGroupApiRequest = (groupId,newRunner) => axios.post(`http://localhost:5000/api/collections/groups/${groupId}/${newRunner}`); 


