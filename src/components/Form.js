import React from 'react'

export default function Form(props) {
    return (
        <form className='form input-group text-center my-2 row container' onSubmit={props.getWeather}>
            <input className='form-control input-group-text my-2 col-md-5' type="text" name="country" id="country" placeholder='Enter your country' required/>
            <input className='form-control input-group-text my-2 col-md-5' type="text" name="city" id="city" placeholder='Enter your city' required/> 
            <button className="btn btn-primary my-2 col-md-2" type='submit'>Get Weather</button>
        </form>
    )
}
