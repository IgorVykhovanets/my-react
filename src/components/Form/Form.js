import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createCar} from "../../store/slice/car.slice";
import './form.modules.css'

const Form = () => {

    const {handleSubmit, reset, register} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createCar({data}));
        reset()
    };

    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit(submit)}>
                <label><input type="text" placeholder={'model'} {...register('model')}/></label>
                <label><input type="text" placeholder={'year'} {...register('year')}/></label>
                <label><input type="text" placeholder={'price'} {...register('price')}/></label>
                <button>save</button>
            </form>
        </div>
    );
};

export default Form;