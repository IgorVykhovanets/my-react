import {createSlice} from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState:{
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: new Date().getTime(),
                name: action.payload,
                status: false
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        statusTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            todo.status = !todo.status;
        }
    }
})

export const {addTodo, deleteTodo, statusTodo} = todosSlice.actions;
export const todoReducer = todosSlice.reducer;