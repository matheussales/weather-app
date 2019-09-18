import { combineReducers } from "redux";
import weather from "./weather/reducers";

const reducers = combineReducers({ weather });

export default reducers;
