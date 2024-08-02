import React, { Component } from 'react';
import './TodoCard.css';

export default class TodoCard extends Component {
    render() {
        const { todos, onDelete, onEdit, editId, editTitle, setEditTitle, handleUpdate } = this.props;

        if (todos.length === 0) {
            return null;
        }

        return (
            <div className='mainContainer'>
                {todos.map(item => {
                    let content;
                    let saveButton;

                    if (editId === item.id) {
                        content = (
                            <input
                                type='text'
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                className='inputElement'
                            />
                        );
                        saveButton = <button className='editButton' onClick={handleUpdate}>Save</button>;
                    } else {
                        content = <div className='taskDisplay'>{item.title}</div>;
                        saveButton = (
                            <button className='editButton' onClick={() => onEdit(item.id)}>Edit</button>
                        );
                    }

                    return (
                        <div className='cardContainer' key={item.id}>
                            <div className='insideContent'>
                                {content}
                                <div className='buttonGroup'>
                                    <div>{saveButton}</div>
                                    <button className='deleteButton' onClick={() => onDelete(item.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
