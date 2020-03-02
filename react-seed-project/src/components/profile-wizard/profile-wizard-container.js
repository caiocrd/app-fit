import React, { useState, useEffect } from 'react';
import ProfileWizardView from './profile-wizard-view';
import { save } from '../../utils/local-storage'

export default function ProfileWizardContainer(props) {
  const [index, setIndex] = useState(0);
  const [profile, setProfile] = useState({});
  const [finish, setFinish] = useState(false);

  // DEBUG
  useEffect( () => {
    console.log(profile);
  }, [profile]);

  useEffect( () => {
    if (finish) props.history.push({ pathname: `/profile`, state: {profile} });
  }, [finish]);

  const handleChange = event => {
    setProfile({...profile, [event.target.id]: event.target.value});
  }

  const setProfileProperty = (key, value) => {
    setProfile({...profile, [key]: value});
  }

  const setDietAndFinish = value => {
    setProfile({...profile, 'diet': value});
    save('firstAccess', 'false');
    setFinish(true);
  }


  return (
    <ProfileWizardView
      index={index}
      setIndex={setIndex}
      handleChange={handleChange}
      setProfileProperty={setProfileProperty}
      setDietAndFinish={setDietAndFinish}
    />
  );
}