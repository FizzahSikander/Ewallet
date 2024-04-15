// Importing React from the react library to use JSX and component features
import React from 'react';
// Importing stylesheet specific to the StaticCard component for styling
import './staticcard.scss';

// Defining the StaticCard component that displays a credit card visualization
export default function StaticCard(props) {
    // Splitting the inputVendor prop into an array to separate the vendor name, background color, and text color
    // If inputVendor is not provided, fallback to an empty string
    let vendorArray = props.inputVendor ? props.inputVendor.split(' ') : '';

    // Rendering the visual representation of a static card
    return (
        // React Fragment used to return multiple elements without adding an extra node to the DOM
        <>
            <article className='card card__behind' 
                // Inline styling for the background and text color based on the vendorArray values
                style={{ background: `${vendorArray[1]}`, color: `${vendorArray[2]}` }} >

                <aside className='card__icons'>
                    <img className='card__chipcolor' src="../../src/assets/chip-dark.svg" alt="" />
                    {vendorArray ? <img className='card__logoimage' src={`../src/assets/vendor-${vendorArray[0]}.svg`} alt="" /> : ''}
                </aside>

                <p className='card__numbers extra-margin'>{props.inputNumber}</p>

                <aside className='card__specification'>
                    <span className='card__title'>Cardholder Name</span>
                    <span className='card__valid'>Valid Thru</span>
                </aside>

                <aside className='card__specification'>
                    <span className='card__name'>{props.inputHolder}</span>
                    <span className='card__date'>{props.inputValid}</span>
                </aside>

            </article>
        </>
    )
}
