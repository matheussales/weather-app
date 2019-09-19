export function addWeather(city) {
  return {
    type: "@weather/ADD",
    payload: city
  };
}
