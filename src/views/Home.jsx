import React from 'react';
import { useNavigate } from 'react-router-dom';
import Top from '../components/top/Top';
import Card from '../components/card/Card';
import CardStack from '../components/cardstack/CardStack';
import './home.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleAddCardClick = () => {
    navigate('/addcard');
  };

  return (
    <div className='wallet-article'>
      <Top />
      <Card />
      <CardStack />
      <button onClick={handleAddCardClick} className='wallet-article__button'>
        ADD A NEW CARD
      </button>
    </div>
  );
};

export default Home;
