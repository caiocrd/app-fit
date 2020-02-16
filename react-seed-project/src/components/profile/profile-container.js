import React from 'react';
import ProfileView from './profile-view';

export default function ProfileContainer(props) {
    const onStart = () => {
        props.history.push({ pathname: `/` });
    }

    return(
        <ProfileView profile={props.location.state.profile} onStart={onStart} />
    );
}