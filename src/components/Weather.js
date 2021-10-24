import React from 'react';
const Weather = (props) => {    

    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let dayNumber = date.getDay();
    let dayName = '';

    if(dayNumber === 0){
        dayName = 'SUN'
    }else if(dayNumber === 1){
        dayName = 'MON'
    }else if(dayNumber === 2){
        dayName = 'TUE'
    }else if(dayNumber === 3){
        dayName = 'WED'
    }else if(dayNumber === 4){
        dayName = 'THU'
    }else if(dayNumber === 5){
        dayName = 'FRI'
    }else if(dayNumber === 6){
        dayName = 'SAT'
    }else{
        dayName = '';
    }

    return (
    <div className='text-center my-5'>
        <h2>{`${m}/${d}/${y} - ${dayName}`}</h2>
        <h2>{props.country}, {props.city} <span className="badge rounded-pill bg-primary small">{Math.floor(props.temp) - 272 } °C</span></h2>
        <table className='table w-50 fs-4 mx-auto'>
            <tbody className=''>
            <tr>
                <th className='text-primary' scope='row'><i class="fas fa-info"></i> State </th>
                <td>{props.description}</td>
            </tr>
            <tr>
                <th className='text-primary' scope='row'><i class="fas fa-tint"></i> Humidity </th>
                <td>{props.humidity}%</td>
            </tr>
            <tr>
                <th className='text-primary' scope='row'><i class="fas fa-eye"></i> Visibility </th>
                <td>{props.visibility / 1000 } km</td>
            </tr>
            <tr>
                <th className='text-primary'><i class="fas fa-arrow-right"></i> <i class="fas fa-arrow-left"></i> pressure </th>
                <td>{props.pressure} mb</td>
            </tr>
            </tbody>
        </table>
    </div>
    );

}
 
export default Weather;