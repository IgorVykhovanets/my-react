import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllCars} from "../../store/slice/car.slice";
import Car from "../../components/Car/Car";
import Form from "../../components/Form/Form";
import './cars.page.modules.css'

const CarsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    },[])

    const {cars} = useSelector(state => state['carReducer']);

    return (
        <div>
            <div><Form/></div>
            <div className={'cars'}>{cars.map(car => <Car key={car.id} car={car}/>)}</div>
        </div>
    );
};

export default CarsPage;