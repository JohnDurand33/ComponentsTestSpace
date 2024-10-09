import { useState } from 'react';

const CounterUseState = () => {
    const [count, setCount] = useState(0)  //normal useState Method
    
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <>
            <div>
                <p>Current Count: {count}</p>
                <button type='button'
                    onClick={increment}>Increment Count
                </button>
                <button type='button'
                    onClick={decrement}>Decrement Count</button>
                <button type='button'
                    onClick={reset}>Reset Count</button>
            </div>
        </>
    )
};

export default CounterUseState;