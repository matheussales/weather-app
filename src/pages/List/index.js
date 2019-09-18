import React from "react";
import { connect } from "react-redux";

// import { Container } from './styles';

function List({ weathers }) {
  return (
    <ul>
      {weathers.map(weather => (
        <li>{weather.name}</li>
      ))}
    </ul>
  );
}

export default connect(state => ({
  weathers: state.weather
}))(List);
