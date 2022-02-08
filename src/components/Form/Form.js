import React from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/slice/todos.slice";
import {useForm} from "react-hook-form";

const Form = () => {

    const {reset, handleSubmit, register} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addTodo(data.name));
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'todo'} {...register('name')}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default Form;