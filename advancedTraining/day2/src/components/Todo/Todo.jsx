import React, { useState } from 'react'
import { v4 as uniqId } from 'uuid'
import Plus from '../../assets/plus.png'
import '../Todo/Todo.css'


function TaskList({ todos, onDelete }) {

    if (todos.length === 0) {
        return null
    }

    return (
        <div className='allTaskContainer'>
            {todos.map((item =>
            <div className='listContainer'>
            <li key={item.id} className='listItems'>{item.title}</li>
            <button onClick={() => onDelete(item.id)} className='deleteButton'>Delete</button>
            </div>
            ))}
        </div>
    )
}

export default function Todo() {

    const [todo, setTodo] = useState([])

    const addNewTodo = (newValues) => {
        const newTodo = [...todo, { id: uniqId(), title: newValues }]
        setTodo(newTodo)
    }

    const deleteTodo = (id) => {
        const updatedTodo = todo.filter(item => item.id !== id)
        setTodo(updatedTodo)
    }

    return (
        <div className='mainContainer'>
            <h2 className='appTitle'>Todo List</h2>
            <InputBox newItem={addNewTodo} />
            <TaskList todos={todo} onDelete={deleteTodo}/>
        </div>
    )
}

// Input Box Component for TODO LIST
function InputBox({ newItem }) {

    const [currentInput, setCurrentInput] = useState('')

    // Taking new inputs using {useState}
    const liveInputSync = (e) => {
        const liveInput = e.target.value
        setCurrentInput(liveInput)
    }

    const addClick = () => {
        if (currentInput.trim()) {
            newItem(currentInput);
            setCurrentInput('')
        }
    }

    return (
        <div className='mainInputContainer'>
            <input className='inputContainer' value={currentInput} onChange={liveInputSync} placeholder='Add your tasks here and press the button' />
            <button className='addButton' onClick={addClick}> <img className='buttonLogo' src={Plus} alt='plusImage' /></button>
        </div>
    )
}