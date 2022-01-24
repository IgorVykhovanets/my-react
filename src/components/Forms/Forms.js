import React, {useState} from 'react';

const Forms = ({getFilter}) => {

    const [forms, setForms] = useState({name: '', username: '', email: ''});

    const formHandler = (e) => {
        const eventData = {...forms, [e.target.name]: e.target.value}
        setForms({...forms, ...eventData});
        getFilter(eventData);
    }

    return (
        <div>
            <form>
                <label><input type="text" name={'name'} value={forms.name} onChange={formHandler}/></label>
                <label><input type="text" name={'username'} value={forms.username} onChange={formHandler}/></label>
                <label><input type="text" name={'email'} value={forms.email} onChange={formHandler}/></label>
            </form>
        </div>
    )
};

export default Forms;