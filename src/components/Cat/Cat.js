import React from 'react';

const Cat = ({cat: {name, id}, dispatch}) => {

    const DeleteCat = () => {
        dispatch({type: 'delete_cat', payload: {id}})
    };

    return (
        <div>
            cat: {name} --- <button onClick={DeleteCat}>delete</button>
        </div>
    );
};

export default Cat;