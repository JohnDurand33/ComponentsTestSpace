import React, { useState } from "react";

const RegistrationForm = () => {
    // Initializing state for multiple form fields
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: ''
    });

    // Handler to update state when the user types
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues, // Keep the other form fields unchanged
            [name]: value  // Update the field that triggered the event
        });
    };

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the page from refreshing
        console.log('Form submitted:', formValues); // You can handle form submission here
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Register</button>
            </form>

            {/* Display the real-time values */}
            <h3>Form Values in Real-Time</h3>
            <p>Username: {formValues.username}</p>
            <p>Email: {formValues.email}</p>
            <p>Password: {formValues.password}</p>
        </div>
    );
};

export default RegistrationForm;