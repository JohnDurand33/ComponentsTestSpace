import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../styles/module.profileCardStyles.css' 


const UserProfileCardQ = () => {
    const [profile, setProfile] = useState({
        fname: '',
        lname: '',
        email: '',
        picUrl: '',
    })
    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get('https://randomuser.me/api/');
            console.log(response.data)
            setProfile(prevProfile => ({
                ...prevProfile, fname: response.data.results[0].name.first || '',
                lname: response.data.results[0].name.last || '',
                email: response.data.results[0].email || '',
                picUrl: response.data.results[0].picture.large || response.data.results[0].picture.medium || response.data.results[0].picture.thumbnail || null,
            }));
        };
        getUser();

        return () => {
            setProfile({
                fname: '',
                lname: '',
                email: '',
                picUrl: '',
            });
        }
    }, []);

    return (
        <>
            <div className='profile-card'>
                <div>Email: {profile.email}</div>
                <div className="profile-name"><strong> Name: {profile.fname} {profile.lname}</strong></div>
                <div className="profile-email">
                    <img src={profile.picUrl !== null ? profile.picUrl : 'https://via.placeholder.com/150'}
                        alt={profile.picUrl !== null ? 'Random Profile Picture' : 'No picture fetched'}/>
                </div>
            </div>
        </>
    )
};

export default UserProfileCardQ;