import {counterReducer} from "./counter-reducer";
import {textReducer} from "./text-reducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    text: textReducer
})

export default allReducers
