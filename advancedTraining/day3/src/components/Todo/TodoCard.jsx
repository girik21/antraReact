import React from 'react'
import './Todo.css'

export default function TodoCard({ todos, onDelete, onEdit, editId, editTitle, setEditTitle, handleUpdate }) {
    if (todos.length === 0) {
        return null
    }

    return (

        <div className='todoContainer'>
            {todos.map((item) => {
                let content
                let saveButton

                if (editId === item.id) {
                    content = (
                        <input type='text' value={editTitle} onChange={(e) => setEditTitle(e.target.value)}  className='inputElement' />
                    )
                    saveButton = <button onClick={handleUpdate}>Save</button>
                }
                else {
                    content = <li className='listElement'>{item.title}</li>
                    saveButton = (
                        <button className='editContainer' onClick={() => onEdit(item.id)}>Edit</button>
                    )
                }

                return (
                    <div className='cardElement' key={item.id}>
                        <div className='textContainer'>{content}</div>
                        <div className='buttonGroup'>
                            <div>{saveButton}</div>
                            <button className='buttonContainer' onClick={() => onDelete(item.id)}>Complete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
