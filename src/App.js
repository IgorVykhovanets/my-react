import React, {useReducer} from 'react';

import './App.css'

const App = () => {

    const reducer = (state, action) => {
        switch (action.type1) {
            case 'inc' :
                return {...state, count1: state.count1 + 1};
            case 'dec':
                return {...state, count1: state.count1 - 1};
            case 'reset' :
                return {...state, count1: 0}
        }

        switch (action.type2) {
            case 'inc' :
                return {...state, count2: state.count2 + 1};
            case 'dec' :
                return {...state, count2: state.count2 - 1}
            case 'reset' :
                return {...state, count2: 0}
        }

        switch (action.type3) {
            case 'inc' :
                return {...state, count3: state.count3 + 1};
            case 'dec' :
                return {...state,count3: state.count3 - 1};
            case 'reset' :
                return {...state, count3: 0}
        }

    };
    
   const [state , dispatch] = useReducer(reducer, {count1: 0, count2: 0 , count3: 0})

    return (
        <div>
            <div className={'wrap'}>
                <div className={'countsList'}>
                    <div className={'count'}>{state.count1}</div>
                    <button onClick={() => dispatch({type1: 'inc'})}>INC</button>
                    <button onClick={() => dispatch({type1: 'reset'})}>RESET</button>
                    <button onClick={() => dispatch({type1: 'dec'})}>DEC</button>
                </div>
                <div className={'countsList'}>
                    <div className={'count'}>{state.count2}</div>
                    <button onClick={() => dispatch({type2: 'inc'})}>INC</button>
                    <button onClick={() => dispatch({type2: 'reset'})}>RESET</button>
                    <button onClick={() => dispatch({type2: 'dec'})}>DEC</button>
                </div>
                <div className={'countsList'}>
                    <div className={'count'}>{state.count3}</div>
                    <button onClick={() => dispatch({type3: 'inc'})}>INC</button>
                    <button onClick={() => dispatch({type3: 'reset'})}>RESET</button>
                    <button onClick={() => dispatch({type3: 'dec'})}>DEC</button>
                </div>
            </div>
        </div>
    );
};

export default App;