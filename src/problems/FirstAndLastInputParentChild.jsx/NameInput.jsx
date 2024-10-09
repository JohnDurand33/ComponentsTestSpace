import React from "react";


const NameInput = ({ name, setName }) => {
    const handleChange = (event) => {
        const { value } = event.target;
        console.log(name)
        setName(value)
        console.log(value)
    }
    return (

        <label htmlFor="name">
            <input type="text"
                name="name"
                value={name}
                onChange={handleChange} />
        </label>
    )
};

export default NameInput;