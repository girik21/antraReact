import axios from 'axios';

const baseUrl = 'http://localhost:1000/tasks';

export const fetchTodos = async () => {
    const response = await axios.get(baseUrl)
    return response.data;
}

export const addTodo = async(todo) => {
    const response = await axios.post(baseUrl, todo)
    return response.data
}

export const updateTodos = async(id , newTodo) => {
    const response = await axios.patch(`${baseUrl}/${id}`, newTodo);
    return response.data
}

export const deleteTodos = async(id) => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data;
}



