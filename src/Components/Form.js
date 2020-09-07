import React from 'react';

const Form = (props) => (
  <form onSubmit={props.getWeather}>
    {' '}
    {/* props on React.js - from Form.js onSubmit, once user presses "Get Weather", getWeather function from App.js is called */}
    <input type="text" name="city" placeholder="City or Country..." />
    <button type="submit">Get Weather</button>
  </form>
);

export default Form;
