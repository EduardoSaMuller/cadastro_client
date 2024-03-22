import React from 'react';
import Header from '../components/organisms/Header/Header';
import userPhoto from '../assets/images/user1.jpg';
import './Home.scss';
import MainContent from '../components/organisms/Main/Main';
const Home = () => {
  return (
    <div className="home">
      <Header userPhoto={userPhoto} />
      
    </div>
  );
};

export default Home;