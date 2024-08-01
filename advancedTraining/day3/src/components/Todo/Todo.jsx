import React, { useEffect, useState } from 'react'
import { v4 as uniqId } from 'uuid'
import { addTasks, deleteTasks, fetchTasks, updateTasks } from '../../utils/todoApi'
import './Todo.css'
import TodoCard from './TodoCard'
import TodoInputs from './TodoInputs'


export default function Todo() {

    const [todo, setTodo] = useState([])
    const [editId, setEditId] = useState(null)
    const [editTitle, setEditTitle] = useState('')

    useEffect(() => {

        const initialLoad = async () => {
            try {
                const tasks = await fetchTasks()
                setTodo(tasks)

            } catch (error) {
                console.log(error)
                alert('Data Fetching Error! Please retry')

            }
        }

        initialLoad();

    }, [])

    const addTodo = async (taskTitle) => {
        try {
            const newTask = await addTasks({ id: uniqId(), title: taskTitle })
            setTodo(prevTodo => [...prevTodo, newTask])
        } catch (error) {
            console.log('Adding Error', error)
            alert('Error adding new Tasks! Retry please')
        }
    }


    const deleteTodo = async (id) => {
        try {
            await deleteTasks(id);
            setTodo(prevTodo => prevTodo.filter(item => item.id !== id))
        } catch (error) {
            console.log('Delete Error', error);
            alert("Error Deleting please retry")
        }
    }

    const editTodo = (id) => {
        const todoEdit = todo.find(item => item.id === id)
        if (todoEdit) {
            setEditId(id);
            setEditTitle(todoEdit.title)
        }
    }

    const handleUpdate = async () => {
        try {
            const editiedTask = await updateTasks(editId, { title: editTitle })
            setTodo(prevTodo => prevTodo.map(item => item.id === editiedTask.id ? editiedTask : item))
            setEditId(null)
            setEditTitle('')
        } catch (error) {
            console.log("Edit error")
            alert("Problem editing please retry")
        }

    }

    return (
        <div>
            <TodoInputs newInput={addTodo} onEdit={editTodo} onUpdate={handleUpdate} />
            <TodoCard todos={todo} onDelete={deleteTodo} onEdit={editTodo} editId={editId} editTitle={editTitle} setEditTitle={setEditTitle} handleUpdate={handleUpdate}/>
        </div>
    )
}



