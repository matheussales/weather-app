export default function weather(state = [], actions) {
  switch (actions.type) {
    case "@weather/ADD":
      return [...state, actions.payload];
    default:
      return state;
  }
}
