// React imports and hooks for component and state management
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux action creators for manipulating card data
import { removeFromStack, removeFromActive, addToActive } from '../../actions/walletAction';

// Stylesheet for CardStack component
import './cardstack.scss';

// CardStack functional component definition
const CardStack = () => {
  // Accessing 'cards' from Redux store's state
  const cards = useSelector((state) => state.cards);
  // Hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Function to set the selected card as active
  const showCard = (card) => {
    dispatch(addToActive(card));
  };

  // Function to remove card from both stack and active view
  const cardRemover = (card) => {
    if (card.hasOwnProperty('cardId')) {
      dispatch(removeFromStack(card));  // Removes the card from stack if it has a 'cardId'
    }
    dispatch(removeFromActive(card));  // Always remove card from active view
  };

  // Mapping over cards to render each as an individual card element
  const cardsItems = cards.map((card) => (
    <article 
      className='card' 
      style={{ background: card.cardVendor[1], color: card.cardVendor[2] }}
      key={card.cardNumber}
    >
      <button className='card-stack__removeButton' onClick={() => cardRemover(card)}>X</button>
      
      <aside className='card__icons'>
        <img className='card__chipcolor' src="../../src/assets/chip-dark.svg" alt="Chip" />
        <img 
          className='card__logoimage' 
          src={`../../src/assets/vendor-${card.cardVendor[0]}.svg`} 
          onClick={() => showCard(card)} 
          alt={`${card.cardVendor[0]} logo`} 
        />
      </aside>

      <p className='card__numbers'>{card.cardNumber}</p>

      <aside className='card__specification'>
        <span className='card__title'>Cardholder Name</span>
        <span className='card__valid'>Valid Thru</span>
      </aside>
      <aside className='card__specification'>
        <span className='card__name'>{card.cardHolder}</span>
        <span className='card__date'>{card.cardValid}</span>
      </aside>
    </article>
  ));

  // Rendering the collection of cards or a message if no cards are present
  return (
    <article className='card-stack'>
      {cardsItems.length > 0 ? cardsItems : <section className='card-stack__noCards'><h1>No cards are added.</h1></section>}
    </article>
  );
};

export default CardStack;

