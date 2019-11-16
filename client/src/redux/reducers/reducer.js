import { combineReducers } from "redux";
import {USER_INPUT_CHANGE} from "../actions/actions";

const initialState = {
    userData: {
        username: "",
        password: "",
        confirmPassword: "",
        userId: "",
    }
  };
const formManipulation = (state = initialState, action) => {
    switch(action.type){
        case USER_INPUT_CHANGE : {
            debugger;
            return {
                ...state,
                userData: {
                    [action.name]: action.value
                }
            };

        }
    }
    return state;
};
const appFunctions = combineReducers({
    formManipulation

});

export default appFunctions;