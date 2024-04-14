import React from 'react';
import { useSelector } from 'react-redux';
import './card.scss';

const Card = () => {
  const activeCard = useSelector((state) => state.active);

  const renderActiveCard = () => {
    if (activeCard.hasOwnProperty('cardNumber')) {
      return (
        <article className='card card__background' style={{ background: `${activeCard.cardVendor[1]}`, color: `${activeCard.cardVendor[2]}` }}>
          <aside className='card__icons'>
            <img className='card__chip' src="../../src/assets/chip-dark.svg" alt="" />
            <img className='card__logo' src={`../../src/assets/vendor-${activeCard.cardVendor[0]}.svg`} alt="" />
          </aside>
          <p className='card__numbers'>{activeCard.cardNumber}</p>
          <aside className='card__specs'>
            <span className='card__title'>Cardholder Name</span>
            <span className='card__valid'>Valid Thru</span>
          </aside>
          <aside className='card__specs'>
            <span className='card__name'>{activeCard.cardHolder}</span>
            <span className='card__date'>{activeCard.cardValid}</span>
          </aside>
        </article>
      );
    } else {
      return (
        <article className='card card__background'>
          <aside className='card__icons'>
            <img className='card__chip' src="../../src/assets/chip-dark.svg" alt="" />
            <img className='card__logo' src="../../src/assets/vendor-bitcoin.svg" alt="" />
          </aside>
          <p className='card__numbers'>XXXX XXXX XXXX XXXX</p>
          <aside className='card__specs'>
            <span className='card__title'>Cardholder Name</span>
            <span className='card__valid'>Valid Thru</span>
          </aside>
          <aside className='card__specs'>
            <span className='card__name'>XXXX XXXX</span>
            <span className='card__date'>XX / XX</span>
          </aside>
        </article>
      );
    }
  };

  return <>{renderActiveCard()}</>;
};

export default Card;
