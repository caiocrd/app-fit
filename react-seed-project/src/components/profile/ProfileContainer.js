import React from 'react';
import ProfileView from './ProfileView.js';

export default function ProfileContainer(props) {
    const onStart = () => {
        props.history.push({ pathname: `/` });
    }

    return(
        <ProfileView profile={props.location.state.profile} onStart={onStart} />
    );
}