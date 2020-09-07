import React from 'react';
import Form from "./Components/Form";
import Titles from "./Components/Titles";
import Weather from "./Components/Weather";

const apiKey = "3513f1fea1630f9015b76c9c0448876c";
//`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=${API_KEY}&q=Harry`

class App extends React.Component {
//in React from v. 16 - you can ditch the constructor to use states
state = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined
}

getWeather = async (e) => {
  e.preventDefault();                                      //on event (e) prevents default to refresh page on pressing search - so that the values would be assigned
  const city =  e.target.elements.city.value;
  const country =  e.target.elements.country.value;
  const api_response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
  const data = await api_response.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Enter a value to get results."
    });
  }
}

render() {
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-5 title-container">
                <Titles />
              </div>
              <div className="col-7 form-container">
              <Form getWeather={this.getWeather}/> 
              <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> // props in React.js - from Form.js file, onSubmit, once user presses "Get Weather", getWeather function is called
  );     // once the getWeather function is called, we're assigning values from the API
}
};

export default App;
