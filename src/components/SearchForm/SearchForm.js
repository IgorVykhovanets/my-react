import React from 'react';
import {useForm} from "react-hook-form";

import './search.form.modules.css'
import {useDispatch} from "react-redux";
import {getMovieSearch} from "../../store/slices/search.slice";

const SearchForm = () => {

    const {handleSubmit, register, reset, formState: {errors}} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(getMovieSearch(data.name));
        reset();
    };


    return (
        <div>
            <div className={'errorForm'}>{errors?.name && <span>cannot be empty</span>}</div>
            <form className={'formElement'} onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name movie'} {...register('name', {required : true})}/>
                <div className={'submit'}><input type="submit" value={'send'}/></div>
            </form>
        </div>
    );
};

export default SearchForm;