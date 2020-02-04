import React, { useState } from 'react';
import ProfileWizardView from './ProfileWizardView.js';

export default function ProfileWizardContainer(props) {
    const [profile, setProfile] = useState({});

    return (
        <ProfileWizardView profile={profile} />
    );
}