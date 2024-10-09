import { useState, useEffect } from 'react'
import '../styles/module.userRegistrationFormStyles.css'

const UserFormQ = () => {
    const [formData, setFormData] = useState({
        lname: '',
        fname: '',
        email: '',
        phone: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        setFormData({
            lname: '',
            fname: '',
            email: '',
            phone: '',
        })
        setIsSubmitting(false)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='form-style' >
                <div className='title-row'>
                    User Registration Form
                </div>
                
                    <div className='field-row'>
                <input
                    className='name-field'
                    type="text"
                    name='fname'
                    value={formData.fname}
                    placeholder='First Name'
                    onChange={handleChange} />
                
                <input
                    className='name-field'
                    type="text"
                    name='lname'
                    value={formData.lname}
                    placeholder='Last Name'
                            onChange={handleChange} />
                    </div>
                <div className='field-row'>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    placeholder='Email Address'
                    onChange={handleChange} />
                    </div>
                <div className='field-row'>
                        <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    placeholder='Phone Number'
                    onChange={handleChange} />
                    </div>
                
                <button type='submit' className = 'button'>
                    {isSubmitting ? 'Submitting' : 'Submit'}
                    </button>
                </form>
        </>
    )
};

export default UserFormQ;