import React from 'react';

import './todo.modules.css';
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../store/slice/todos.slice";
import {statusTodo} from "../../store/slice/todos.slice";

const Todo = ({todo: {id, name, status}}) => {

    const dispatch = useDispatch()

    return (
        <div className={'wrap'}>
            <input type="checkbox" value={status} onChange={() => dispatch(statusTodo({id}))}/>
            <div className={status ? 'completed' : ''}>{name}</div>
            <button onClick={() => dispatch(deleteTodo({id}))}>delete</button>
        </div>
    );
};

export default Todo;