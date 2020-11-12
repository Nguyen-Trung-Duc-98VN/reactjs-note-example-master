import { createStore } from "redux";
import rootReducers from "../reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

//Tạo store từ reducers
const store = createStore(rootReducers, composeWithDevTools());
export default store;