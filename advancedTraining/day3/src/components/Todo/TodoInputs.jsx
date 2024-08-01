import React, { useState } from 'react'
import PlusIcon from '../../assets/plus.png'
import './Todo.css'

export default function TodoInputs({ newInput }) {

    const [currentInput, setCurrentInput] = useState('')

    const getLiveInput = (e) => {
        const liveInput = e.target.value
        setCurrentInput(liveInput)
    }

    const refreshAdd = () => {
        if (currentInput.trim()) {
            newInput(currentInput)
            setCurrentInput('')
        }
    }

    return (
        <div className='outerInputContainer'>
            <h1>Todo List useEffect</h1>
            <div className='outerContainer'>
                <input className='inputContainer' placeholder='Add your task here' value={currentInput} onChange={getLiveInput} />
                <button className='addButton' onClick={refreshAdd}><img src={PlusIcon} alt='searchIcon' /> </button>
            </div>
        </div>
    )
}