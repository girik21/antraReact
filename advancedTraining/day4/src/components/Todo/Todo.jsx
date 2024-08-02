import React, { Component } from 'react';
import { addTodo, deleteTodos, fetchTodos, updateTodos } from '../../utils/todoApi';
import TodoCard from '../TodoCard/TodoCard';
import TodoInput from '../TodoInput/TodoInput';
import './Todo.css';

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainTitle: 'Todo App :)',
            todos: [],
            editId: null,
            editTitle: ''
        };
    }

    componentDidMount() {
        this.loadTasks();
    }

    loadTasks = async () => {
        try {
            const tasks = await fetchTodos();
            this.setState({ todos: tasks });
        } catch (error) {
            console.log(error);
            alert('Data Fetching Error! Please retry');
        }
    };

    addTodo = async (taskTitle) => {
        try {
            const newTask = await addTodo({ title: taskTitle });
            this.setState(prevState => ({
                todos: [...prevState.todos, newTask]
            }));
        } catch (error) {
            console.log('Adding Error', error);
            alert('Error adding new Tasks! Retry please');
        }
    };

    deleteTodo = async (id) => {
        try {
            await deleteTodos(id);
            this.setState(prevState => ({
                todos: prevState.todos.filter(item => item.id !== id)
            }));
        } catch (error) {
            console.log('Delete Error', error);
            alert('Error Deleting please retry');
        }
    };

    editTodo = (id) => {
        const todoEdit = this.state.todos.find(item => item.id === id);
        if (todoEdit) {
            this.setState({
                editId: id,
                editTitle: todoEdit.title
            });
        }
    };

    handleUpdate = async () => {
        try {
            const editedTask = await updateTodos(this.state.editId, { title: this.state.editTitle });
            this.setState(prevState => ({
                todos: prevState.todos.map(item => item.id === editedTask.id ? editedTask : item),
                editId: null,
                editTitle: ''
            }));
        } catch (error) {
            console.log('Edit error');
            alert('Problem editing please retry');
        }
    };

    setEditTitle = (title) => {
        this.setState({ editTitle: title });
    };

    render() {
        return (
            <div className='mainContainer'>
                <h1 className='mainTitle'>{this.state.mainTitle}</h1>
                <TodoInput newInput={this.addTodo} />
                <TodoCard
                    todos={this.state.todos}
                    onDelete={this.deleteTodo}
                    onEdit={this.editTodo}
                    editId={this.state.editId}
                    editTitle={this.state.editTitle}
                    setEditTitle={this.setEditTitle}
                    handleUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}
