import React from 'react'
import './addtop.scss'
import { useNavigate } from 'react-router-dom';

function AddTop() {

    const navigate = useNavigate();

    function handleClick() {
        navigate(-1)
    }

    return (
        <>
            <section className='addtop'>
                <div className='addtop__round' onClick={handleClick}><i className='fas fa-angle-double-left'></i></div>
                <h1 className='addtop__heading'> Add a new bankcard </h1>
            </section>
            <h6 className='addtop__activecard'>New card</h6>
        </>
    )
}

export default AddTop;