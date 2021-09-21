import * as redux from "redux";
import {combineReducers} from "redux";

import CountReducer from "./Reducers/CountReducer1";
import ArrayReducer from "./Reducers/ArrayReducer";

const rootReducers = combineReducers({
    counter:CountReducer,
    Array:ArrayReducer
});
export const store = redux.createStore(rootReducers);