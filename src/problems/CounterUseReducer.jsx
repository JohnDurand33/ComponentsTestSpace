import { useReducer } from 'react';

import '../styles/global.css'

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return {count: initialState.count}
    }
}

const CounterUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <>
            <div className=''>
            <p>Current Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        </>
    )
};

export default CounterUseReducer;
