import axios from 'axios';

const base_url = 'http://localhost:1000/tasks';


export const fetchTasks = async () => {
    const response = await axios.get(base_url)
    return response.data
}

export const addTasks = async(todo) => {
    const response = await axios.post(base_url, todo);
    return response.data
}

export const updateTasks = async(id , editedTask) => {
    const response = await axios.patch(`${base_url}/${id}`, editedTask)
    return response.data
}

export const deleteTasks = async(id) => {
    const response = await axios.delete(`${base_url}/${id}`);
    return response.data
}