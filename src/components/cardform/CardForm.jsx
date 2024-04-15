import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCards } from '../../actions/walletAction';
import './cardform.scss';

const CardForm = ({ setInputNumber, setInputHolder, setInputValid, setInputVendor }) => {
  // Hooks to interact with Redux and react-router
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for storing card details input by the user
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardValid, setCardValid] = useState('');
  const [cardCcv, setCardCcv] = useState('');
  const [cardVendor, setCardVendor] = useState('');

  // Function to handle the click event of the Add Card button
  const handleClick = () => {
    // Constructing the credit card object from state
    const creditCard = {
      cardNumber,
      cardHolder,
      cardValid,
      cardCcv,
      cardVendor: cardVendor.split(' '), // Splits the vendor string into an array
      cardId: cardNumber,
    };

    // Dispatching the action to add the card to the Redux store
    dispatch(addToCards(creditCard));
    // Navigating back to the previous page
    navigate(-1);
  };

  // JSX for the card form UI
  return (
    <section className='card-form'>
      <label className='card-form__number'>Card number</label>
      <input
        className='card-form__number-input'
        maxLength='16'
        type="text"
        placeholder='1234 5678 9101 1121'
        value={cardNumber}
        onChange={(event) => {
          setCardNumber(event.target.value);
          setInputNumber(event.target.value);
        }}
      />

      <label className='card-form__name'>Cardholder name</label>
      <input
        className='card-form__name-input'
        type="text"
        placeholder='FIRSTNAME LASTNAME'
        value={cardHolder}
        onChange={(event) => {
          setCardHolder(event.target.value);
          setInputHolder(event.target.value);
        }}
      />

      <div className='card-form__smallinputs'>
        <label className='card-form__valid'>Valid thru MM/YY</label>
        <label className='card-form__ccv'>CCV</label>
      </div>

      <div className='card-form__smallinputs'>
        <input
          className='card-form__valid-input'
          type="text"
          maxLength='5'
          placeholder='01 / 25'
          value={cardValid}
          onChange={(event) => {
            setCardValid(event.target.value);
            setInputValid(event.target.value);
          }}
        />
        <input
          className='card-form__ccv-input'
          type="password"
          maxLength='3'
          placeholder='XXX'
          value={cardCcv}
          onChange={(event) => setCardCcv(event.target.value)}
        />
      </div>

      <label className='card-form__vendor'>Vendor</label>
      <select
        className='card-form__select'
        onChange={(event) => {
          setCardVendor(event.target.value);
          setInputVendor(event.target.value);
        }}
        value={cardVendor}
      >
        <option value=''></option>
        <option value="bitcoin #FFAE34 #000000">BITCOIN INC</option>
        <option value="ninja #222222 #FFFFFF">NINJA BANK</option>
        <option value="blockchain #8B58F9 #FFFFFF">BLOCK CHAIN INC</option>
        <option value="evil #F33355 #FFFFFF">EVIL CORP</option>
      </select>

      <button onClick={handleClick} className='card-form__button'>Add Card</button>
    </section>
  );
};

export default CardForm;
