import React, {useRef} from 'react';

const Form = ({dispatch}) => {

    const inputCat = useRef();
    const inputDog = useRef();

    const submit = (e) => {
        e.preventDefault();
    };

    const saveCat = () => {
        dispatch({type: 'add_cat', payload:{cat: inputCat.current.value}})
    };

    const saveDog = () => {
        dispatch({type: 'add_dog', payload: {dog: inputDog.current.value}});
    };

    return (
        <div>
            <form onSubmit={submit}>
                <label>cats:<input type="text" placeholder={'cat'} ref={inputCat}/></label>
                <button onClick={saveCat}>saveCat</button>
                <label>dogs:<input type="text" placeholder={'dog'} ref={inputDog}/></label>
                <button onClick={saveDog}>saveDog</button>
            </form>
        </div>
    );
};

export default Form;