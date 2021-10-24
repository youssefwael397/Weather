import React, { Component } from 'react';
import Weather from './components/Weather';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';

const API_KEY = '739e81d99c067a80dcb660c4ae24f574';
class App extends Component {
  state = {
    temp: '',
    country: '',
    city: '',
    humidity: '',
    description: '',
    visibility:'',
    pressure:'',
    error: ''
  }


  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_PATH = `https://api.openweathermap.org/data/2.5/weather?q=${city}%2c=${country}&appid=${API_KEY}`
    const res = await fetch(API_PATH);
    const data = await res.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temp: data.main.temp,
        country: data.sys.country,
        city: data.name,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        visibility: data.visibility,
        pressure : data.main.pressure,
        error: 'No Error'
      })
    } else {
      this.setState = ({
        temp: '',
        country: '',
        city: '',
        humidity: '',
        description: '',
        visibility: '',
        pressure : '',
        error: 'Please Enter Data'
      })
    }
  }

  render() {
    return (
      <div className="App container mt-2 " >
        <h1 className=' text-center app text-success fw-bold'>Weather App</h1>
        <Form getWeather={this.getWeather} />
        {
          this.state.country === '' && this.state.city === '' ? (null) : (
            <Weather temp={this.state.temp} country={this.state.country} city={this.state.city} humidity={this.state.humidity} description={this.state.description} visibility={this.state.visibility}
            pressure={this.state.pressure}/>
          )
        }
        <Footer />
      </div>
    );
  }
}
export default App;
