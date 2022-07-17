import {createStore, combineReducers}  from "redux";
import  LoginReducer  from '../Reducer/loginreducer';


const reducers = combineReducers({
    loginDetail: LoginReducer
});

const store = createStore(reducers);

export default store;



