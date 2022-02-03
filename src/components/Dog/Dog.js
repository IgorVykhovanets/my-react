import React from 'react';

const Dog = ({dog: {name, id}, dispatch}) => {

    const deleteDog = () => {
        dispatch({type: 'delete_dog' , payload: {id}})
    };


    return (
        <div>
            dog: {name} --- <button onClick={deleteDog}>delete</button>
        </div>
    )
};

export default Dog;