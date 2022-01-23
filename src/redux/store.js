

import { createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducer"
import { createWrapper } from "next-redux-wrapper" // FOR NEXT JS ONLY


const store = () =>  createStore(rootReducer , composeWithDevTools(applyMiddleware(thunk)))


export const wrapper  = createWrapper(store) 