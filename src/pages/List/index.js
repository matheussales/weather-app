import React from "react";
import { useSelector } from "react-redux";

// import { Container } from './styles';

export default function List() {
  const weathers = useSelector(state => state.weather);

  return (
    <ul>
      {weathers.map(weather => (
        <li>{weather.name}</li>
      ))}
    </ul>
  );
}
