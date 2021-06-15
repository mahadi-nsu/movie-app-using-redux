import { combineReducers } from "redux";

import messageReducer from "./reducer";

const rootReducer = combineReducers({ messageReducer });

export default rootReducer;
