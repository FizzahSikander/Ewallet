import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCards } from '../../actions/walletAction';
import './cardform.scss';

const CardForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardValid, setCardValid] = useState('');
  const [cardCcv, setCardCcv] = useState('');
  const [cardVendor, setCardVendor] = useState('');

  const handleClick = () => {
    const creditCard = {
      cardNumber,
      cardHolder,
      cardValid,
      cardCcv,
      cardVendor: cardVendor.split(' '),
      cardId: cardNumber,
    };

    dispatch(addToCards(creditCard));
    navigate(-1);
  };

  return (
    <section className='card-form'>
      <span className='card-form__number'>Card number</span>
      <input
        className='card-form__number-input'
        maxLength='16'
        type="text"
        placeholder='1234 5678 9101 1121'
        value={cardNumber}
        onChange={(event) => { setCardNumber(event.target.value); props.setInputNumber(event.target.value); }}
      />

      <span className='card-form__name'>Cardholder name</span>
      <input
        className='card-form__name-input'
        type="text"
        placeholder='FIRSTNAME LASTNAME'
        value={cardHolder}
        onChange={(event) => { setCardHolder(event.target.value); props.setInputHolder(event.target.value); }}
      />

      <div className='card-form__smallinputs'>
        <span className='card-form__valid'>Valid thru MM/YY</span>
        <span className='card-form__ccv'>CCV</span>
      </div>

      <div className='card-form__smallinputs'>
        <input
          className='card-form__valid-input'
          type="text"
          maxLength='5'
          placeholder='01 / 25'
          value={cardValid}
          onChange={(event) => { setCardValid(event.target.value); props.setInputValid(event.target.value); }}
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

      <span className='card-form__vendor'>Vendor</span>
      <select
        className='card-form__select'
        onChange={(event) => { setCardVendor(event.target.value); props.setInputVendor(event.target.value); }}
        value={cardVendor}
      >git grep"
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
