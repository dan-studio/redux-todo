import { combineReducers, createStore } from "redux";
import todos from "../todos";

const rootReducer = combineReducers({todos})

const store = createStore(rootReducer)

export default store