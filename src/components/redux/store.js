import {createStore} from "redux";
import React from "react";

const defaulthState = {
    isAuth: false
}

const reducer = (state = defaulthState, action) => {
    switch (action.type){
        case "LOG_IN":
            return {...state, isAuth: true}
        case "LOG_OUT":
            return {...state, isAuth: false}
        default:
            return state
    }
}


const store = createStore(reducer)

export default store;