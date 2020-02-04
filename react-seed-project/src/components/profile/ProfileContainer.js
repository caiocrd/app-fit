import React from 'react';
import ProfileView from './ProfileView.js';

export default function ProfileContainer(props) {
    return(
        <ProfileView profile={props.location.state.profile} />
    );
}