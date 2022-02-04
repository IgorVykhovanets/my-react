import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {carsService} from "../../services/cars.service";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carsService.getAll();
            return cars;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carsService.addCar(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {
            console.log(e)
        }
    }
);

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCarThunk',
    async ({id}, {dispatch}) => {
        const deleteCarId = await carsService.deleteCar(id);
        dispatch(deleteCar({id}))
    }
);


const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push({
                ...action.payload.data
            });
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            console.log('loading');
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});

const carReducer = carSlice.reducer;

export const {addCar, deleteCar} = carSlice.actions;

export default carReducer;