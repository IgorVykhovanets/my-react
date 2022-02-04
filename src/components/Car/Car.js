import React from 'react';
import {useDispatch} from "react-redux";

import './car.modules.css'
import {deleteCarThunk} from "../../store/slice/car.slice";

const Car = ({car: {id, model, year, price}}) => {

    const dispatch = useDispatch();

    const delCar = () => {
        dispatch(deleteCarThunk({id}));
    };

    return (
        <div className={'carWrap'}>
            <div>model: {model}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button onClick={delCar}>delete</button>
        </div>
    );
};

export default Car;