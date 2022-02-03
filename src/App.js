import React, {useReducer} from 'react';

import Form from "./components/Form/Form";
import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";
import './App.css';

const App = () => {

    const objAnimals = {cats : [] , dogs: []}

    const red = (state, action) => {
        switch (action.type) {
            case 'add_cat':
                return {...state, cats: [...state.cats, {id: new Date().getTime() , name: action.payload.cat}]};
            case 'add_dog':
                return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]};
            case 'delete_cat':
                return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)};
            case 'delete_dog':
                return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)};
            default:
                return state;
        }


    };

    const [{cats, dogs}, dispatch] = useReducer(red, objAnimals);


    return (
        <div>
            <div>
                <Form dispatch={dispatch}/>
                <div className={'animals'}>
                    <div><Cats cats={cats} dispatch={dispatch}/></div>
                    <div><Dogs dogs={dogs} dispatch={dispatch}/></div>
                </div>
            </div>
        </div>
    );
};

export default App;