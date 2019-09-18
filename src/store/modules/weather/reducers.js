export default function weather(state = [], actions) {
  switch (actions.type) {
    case "ADD_WEATHER":
      return [...state, actions.city];
    default:
      return state;
  }
}
