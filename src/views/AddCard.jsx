// Importing styles specific to the AddCard component
import './addcard.scss';
// Importing the React library to use React features
import React from 'react';
// Importing child components that are used in this component
import AddTop from '../components/top/AddTop';
import CardForm from '../components/cardform/CardForm';
import StaticCard from '../components/staticCard/Staticcard';
// Importing the useState hook from React for state management within this component
import { useState } from 'react';

// Defining the AddCard functional component
function AddCard() {
  // State variables for the AddCard component to store credit card details
  const [inputNumber, setInputNumber] = useState(); // Stores the credit card number
  const [inputHolder, setInputHolder] = useState(); // Stores the cardholder's name
  const [inputValid, setInputValid] = useState(); // Stores the card's validity date
  const [inputVendor, setInputVendor] = useState(); // Stores the card vendor information

  // The component returns JSX to be rendered
  return (
    // React Fragment to group the list of children without adding extra nodes to the DOM
    <>
      <article className='add-article'> 

        <AddTop />  
        <StaticCard 
          inputNumber={inputNumber} 
          inputHolder={inputHolder} 
          inputValid={inputValid} 
          inputVendor={inputVendor} 
        />  
        <CardForm 
          setInputNumber={setInputNumber} 
          setInputHolder={setInputHolder} 
          setInputValid={setInputValid} 
          setInputVendor={setInputVendor}
        />  

      </article>
    </> 
  )
}

// Exporting AddCard so it can be used in other parts of the application
export default AddCard;
