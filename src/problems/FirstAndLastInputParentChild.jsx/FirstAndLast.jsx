import React, { useState } from "react";
import NameInput from '../../NameInput'


const FirstAndLast = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    
    return (
        <>
            <div style={{ display: 'flex', justifyContent:"center" }}>
                <div style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
                <NameInput name={firstName} setName={setFirstName} />
                    <p>{firstName}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <NameInput name={lastName} setName={setLastName} />
                    <p>{lastName}</p>
                </div>
            </div>
        </>
    )

}

export default FirstAndLast;