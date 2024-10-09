import { useReducer } from 'react';

const initialState = {
    name: '',
    email: '',
    password: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'updateField':
            return {
                ...state, [action.field]: action.value
            };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

const FormUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted', state);
        dispatch({ type: 'reset' })
    }

    const handleChange = (e) => {
        dispatch({
            type: 'updateField',
            field: e.target.name,
            value: e.target.value,
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange} />
                
                <label htmlFor="email">Email:</label>
                <input type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange} />
                
                <label htmlFor="password">Password</label>
                <input type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange} />
                
                <button type='submit'>Submit</button>
                <button type="button"
                    onClick={()=>dispatch({ type:'reset'})}>Reset</button>
            </form>
        </>
    )
};

export default FormUseReducer;
