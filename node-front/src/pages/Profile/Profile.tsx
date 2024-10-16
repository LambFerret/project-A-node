import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth, getCookie } from '../../utils/util';

const Profile: React.FC = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchProfile = async (auth: string | undefined) => {
            try {
                const header = {
                    Authorization: auth,
                }
                const response = await axios.get('http://localhost:8080/profile', { headers: header });
                setName(response.data.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        const auth = getAuth();
        if (auth === undefined) {
            setName('Please login first');
        } else {
            fetchProfile(auth);

        }
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {name}</p>
        </div>
    );
};

export default Profile;