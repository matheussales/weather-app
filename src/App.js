import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import "./config/ReactotronConfig";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
