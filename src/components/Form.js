import React from 'react'

export default function Form(props) {
    return (
        <form className='form form-group text-center mx-auto my-2 row container' onSubmit={props.getWeather}>
            <label htmlFor="country">Country</label>
            <input className='form-control input-group-text my-2 ' type="text" name="country" id="country" placeholder='Enter your country ' required />
            <label htmlFor="city">City</label>
            <input className='form-control input-group-text my-2 ' type="text" name="city" id="city" placeholder='Enter your city' required />
            <button className="btn btn-primary d-block my-3" type='submit'>Get Weather</button>
        </form>
    )
}
