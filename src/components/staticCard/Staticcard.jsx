import React from 'react'
import './staticcard.scss'

export default function StaticCard(props) {

    let vendorArray = props.inputVendor ? props.inputVendor.split(' ') : '';

    return (
        <>
            <article className='card card__background' style={{ background: `${vendorArray[1]}`, color: `${vendorArray[2]}` }} >

                <aside className='card__icons'>
                    <img className='card__chip' src="../../src/assets/chip-dark.svg" alt="" />
                    {vendorArray ? <img className='card__logo' src={`../src/assets/vendor-${vendorArray[0]}.svg`} alt="" /> : ''}

                </aside>

                <p className='card__numbers extra-margin'>{props.inputNumber}</p>

                <aside className='card__specs'>
                    <span className='card__title'>Cardholder Name</span>
                    <span className='card__valid'>Valid Thru</span>
                </aside>

                <aside className='card__specs'>
                    <span className='card__name'>{props.inputHolder}</span>
                    <span className='card__date'>{props.inputValid}</span>
                </aside>

            </article>
        </>
    )
}
