import axios from "axios";

const url = `http://localhost:5000/api/collections/groups`;

export const getAllRunGroupsRequest = () => axios.get(url);
export const createRunGroup = (newRunGroup) => axios.post(url, newRunGroup);
