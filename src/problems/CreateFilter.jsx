import React, { useState, useEffect } from 'react';

const numbers = [-1, -3, 5, 7, 8, 12, -13, 0]

const CreateFilter = () => {
    
    const [direction, setDirection] = useState('asc')
    const [sortedNumbers, setSortedNumbers] = useState([...numbers]);
    
    useEffect(() => {
        const sorted = [...numbers].sort((a, b) => {
            return direction === 'asc' ? a - b : b - a;
        });
        setSortedNumbers(sorted);
    }, [direction]);

    const toggleDirection = () => {
        setDirection(direction === 'asc' ? 'desc' : 'asc')
    }

    
    return (
        <>
            <div>
                <ul>
                    {sortedNumbers.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
                <button
                    type='button'
                    onClick={toggleDirection}>Toggle to {direction === 'asc' ? 'Descending' : 'Ascending'}
                </button>
            </div>
        </>
    )
};

export default CreateFilter;