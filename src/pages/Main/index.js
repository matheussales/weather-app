import React, { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../services/api";

import Card from "../../components/Card";
import List from "../List";

import { Container, Button } from "./styles";

export default function Main() {
  const dispatch = useDispatch();
  const [actualWeather, setActualWeather] = useState({});

  const cities = [
    {
      id: 1,
      name: "Rio de Janeiro",
      lat: -22.9035,
      lon: -43.2096
    },

    {
      id: 2,
      name: "São Paulo",
      lat: -23.5489,
      lon: -46.6388
    },

    {
      id: 3,
      name: "Volta Redonda",
      lat: -22.5252,
      lon: -44.1038
    }
  ];

  async function handleButton(city) {
    const params = {
      lat: city.lat,
      lon: city.lon
    };

    const response = await api.get("/current/", { params });
    setActualWeather(response.data.main);

    dispatch({ type: "ADD_WEATHER", city });
  }

  return (
    <Container>
      <div>
        {cities.map(city => (
          <Button key={city.id} onClick={() => handleButton(city)}>
            {city.name}
          </Button>
        ))}
      </div>

      <Card weather={actualWeather} />

      <List />
    </Container>
  );
}
