import React from "react";

import { Container } from "./styles";

export default function Card({ weather }) {
  return (
    <Container>
      <p>{weather.temp}</p>
    </Container>
  );
}
