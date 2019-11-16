import { combineReducers } from "redux";
import {USER_INPUT_CHANGE} from "../actions/actions";

const initialState = {
    userData: {
        userName: "",
        password: "",
        confirmPassword: "",
        userId: "",
    },
    ryanStuff: []
  };
const formManipulation = (state = initialState, action) => {
    switch(action.type){
        case USER_INPUT_CHANGE : {
            console.log(action)
            return {
                ...state,
                userData: {
                    ...state.userData,
                    [action.name]: action.value
                }
            };

        }
    }
    return state;
};
//form reducer
//lobby reducer
const appFunctions = combineReducers({
    formManipulation

});

export default appFunctions;