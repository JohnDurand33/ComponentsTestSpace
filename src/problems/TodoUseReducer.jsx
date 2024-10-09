import { useReducer, useState } from 'react';

const initialState = []

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            console.log("state, action:", (state, action))
            return [...state, { id: Date.now(), text: action.text, completed: false }]
        case 'toggleTodo':
            return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
        case 'deleteTodo':
            return state.filter(todo => todo.id !== action.id)
        default: return state
    }
};

const TodoWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Update input value
    };

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch({ type: 'add', text: inputValue });
            setInputValue('')
        }
    }
    
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <strong style={{ alignSelf: 'center'}}>Todo List</strong>
                
                <div style={{ display: 'inline-block', margin: '10px 0' }}>
        <label htmlFor="newTodo">New Todo Item:</label>
        <input type="text"
            name="newTodo"
            value={inputValue}
            onChange={handleInputChange} />
            <button onClick={handleAddTodo} style={{ marginLeft: '5px' }}>Add Todo</button>
        </div>        
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {state.length > 0 ? (state.map((todo, index) => 
                    
                        <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        Item No. {index + 1}: {todo.text}
                        <input type="checkbox"
                            checked={todo.completed}
                            onClick={() => dispatch({ type: 'toggleTodo', id: todo.id })}
                            style={{ marginLeft: '10px' }}/>
                    
                            <button type='button' style={{ backgroundColor: 'yellow', borderRadius: '5px', border: '1px solid grey', marginLeft: '10px', visibility: !todo.completed ? 'hidden' : '' }}
                            onClick={() => dispatch({ type: 'deleteTodo', id: todo.id })}>Delete</button>
                            </li>
                            
            )) : 'No todos yet.  Add a todo to get started!'}
                    </ul>
                
            </div>
        </>
    )
}
export default TodoWithUseReducer;