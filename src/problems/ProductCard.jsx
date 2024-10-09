import React, { useState } from 'react';
import seanImg from '../assets/Sean.jpg' 

/* You're building a profile card component for users with the following requirements:

Profile Picture on the left.
User Details on the right.
Name displayed at the top.
A Bio section below the name.
A button at the bottom-right corner that says "Contact".
Functionality Requirements:
When the "Contact" button is clicked, a modal should appear (or just a simple popup for now) that displays a contact form (name, email, and message).
The modal should have a close button that hides the form when clicked.
Layout Restrictions:
The profile picture should be fixed at 150px wide.
The user details section should take up the remaining space using flexbox.
The user details section should:
Use CSS Grid to place the name at the top, bio in the middle, and the Contact button at the bottom-right corner.
The button should always remain anchored in the bottom-right corner of the user details section, even if the content changes.
Use Flexbox to horizontally align the profile picture and the user details.
Task:
Create the React component with both layout and functionality.
Use state to control the visibility of the modal.
The Contact button should toggle the modal’s visibility.
The modal should include a form with at least 3 fields (name, email, message), and a close button to hide it.
 */

const stledDiv = {
    position:'relative',
    display: 'block',
}

const ProductCard = () => {
    const [showModal, setShowModal] = useState(false)

    const filename = seanImg.split('/').pop().split('.')[0]

    const toggleShowModal = () => {
        setShowModal(prevShowModal => !prevShowModal)
    }

    return (
        <>
            <div style={stledDiv}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <h3>{filename}</h3>
                </div >
                <div style={{display:'flex', justifyContent:'space-around', alignItems: 'center', minHeight: 300}}>
                    <img style={{ width: '150px', height: '200px', objectFit: 'cover' }} src={seanImg} alt="Profle"></img>
                    <strong style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 20px',}}>
                        {filename}'s Interests include long walks on the beach, horseback riding and other ridiculousness.
                    </strong>
                    <button type='button'
                        style={{ position: 'absolute', bottom: 40, right: 100 }}>
                        Contact
                    </button>
                </div>
                
            </div>
        </>
    )
}
export default ProductCard;