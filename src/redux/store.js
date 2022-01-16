import { createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReduer from "./rootReduer"


const store =  createStore(rootReduer , composeWithDevTools(applyMiddleware(thunk)))


export default store