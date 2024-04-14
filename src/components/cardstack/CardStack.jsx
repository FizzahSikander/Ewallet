import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromStack, removeFromActive, addToActive } from '../../actions/walletAction';
import './cardstack.scss';

const CardStack = () => {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const showCard = (card) => {
    dispatch(addToActive(card));
  };

  const cardRemover = (card) => {
    if (card.hasOwnProperty('cardId')) {
      dispatch(removeFromStack(card));
    }
    dispatch(removeFromActive(card));
  };

  const cardsItems = cards.map((card) => (
    <article className='card' style={{ background: `${card.cardVendor[1]}`, color: `${card.cardVendor[2]}` }} key={card.cardNumber}>
      <button className='card-stack__removeButton' onClick={() => cardRemover(card)}>X</button>

      <aside className='card__icons'>
        <img className='card__chip' src="../../src/assets/chip-dark.svg" alt="" />
        <img className='card__logo' src={`../../src/assets/vendor-${card.cardVendor[0]}.svg`} onClick={() => showCard(card)} alt="" />
      </aside>

      <p className='card__numbers'>{card.cardNumber}</p>

      <aside className='card__specs'>
        <span className='card__title'>Cardholder Name</span>
        <span className='card__valid'>Valid Thru</span>
      </aside>
      <aside className='card__specs'>
        <span className='card__name'>{card.cardHolder}</span>
        <span className='card__date'>{card.cardValid}</span>
      </aside>
    </article>
  ));

  return (
    <article className='card-stack'>
      {cardsItems.length > 0 ? cardsItems : <section className='card-stack__noCards'><h1 className='card-stack__noCards-text'>No cards are added.</h1></section>}
    </article>
  );
};

export default CardStack;
