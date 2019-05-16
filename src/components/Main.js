import React from 'react';
import { hot } from 'react-hot-loader/root';
import useFetch from '../hooks/getData';
import DoctorsList from './DoctorsList';

const url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=ca&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=aa398a5b3bd3163de60f6aed5debf561';

const Main = () => {
  
  const { loading, data } = useFetch(url);
  
  if (loading) {
    return <p>Loading Doctors...</p>
  }
  
  return <DoctorsList doctors={data}/>
};

export default hot(Main);
