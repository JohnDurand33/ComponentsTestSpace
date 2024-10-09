import React, { useState } from "react";

const ToggleDisplayVisibility = () => {
    const [visible, setVisible] = useState(false)
    
    const toggleVisibility = () => {
        setVisible(prevVisible => !prevVisible);
    }

    return (
    <>
        <div style={{ visibility: visible ? 'visible' : 'hidden' }}>Hello, World!</div>
            <button
                type='button'
                onClick={toggleVisibility}
            >{visible ? 'Hide' : 'Show'}</button>
    </>
        )
}

export default ToggleDisplayVisibility;