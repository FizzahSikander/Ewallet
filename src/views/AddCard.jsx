import './addcard.scss'
import React from 'react'
import AddTop from '../components/top/AddTop';
import CardForm from '../components/cardform/CardForm';
import StaticCard from '../components/staticCard/Staticcard';
import { useState } from 'react';

function AddCard() {

const [inputNumber, setInputNumber] = useState()
const [inputHolder, setInputHolder] = useState()
const [inputValid, setInputValid] = useState()
const [inputVendor, setInputVendor] = useState()

  return (
    <>
      <article className='add-article'>

        <AddTop />
        <StaticCard inputNumber={inputNumber} inputHolder={inputHolder} inputValid={inputValid} inputVendor={inputVendor} />
        <CardForm setInputNumber={ setInputNumber } setInputHolder={ setInputHolder } setInputValid={ setInputValid } setInputVendor={ setInputVendor }/>

      </article>
    </> 
  )
}

export default AddCard;