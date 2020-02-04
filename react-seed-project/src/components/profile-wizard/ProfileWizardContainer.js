import React, { useState } from 'react';
import ProfileWizardView from './ProfileWizardView.js';
import { save } from '../../utils/localStorageUtils.js'

export default function ProfileWizardContainer(props) {
    const [profile, setProfile] = useState({});

    const handleChange = event => {
        setProfile({...profile, [event.target.id]: event.target.value});
        
    }

    const setProfileProperty = (key, value) => {
        setProfile({...profile, [key]: value});
    }

    const setDietAndFinish = value => {
        setProfile({...profile, 'diet': value});
        save('firstAccess', 'false');
        props.history.push({ pathname: `/profile`, state: {profile} });
    }


    return (
        <ProfileWizardView profile={profile} handleChange={handleChange} setProfileProperty={setProfileProperty} setDietAndFinish={setDietAndFinish}/>
    );
}