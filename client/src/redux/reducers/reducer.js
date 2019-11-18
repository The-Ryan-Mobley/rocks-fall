import { combineReducers } from "redux";
import {USER_INPUT_CHANGE, USER_CREATE_ACCOUNT, USER_LOGIN} from "../actions/actions";


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
            return {
                ...state,
                userData: {
                    ...state.userData,
                    [action.name]: action.value
                }
            };

        }
        case USER_CREATE_ACCOUNT : {
                return {
                    ...state,
                    userData: {
                        ...state.userData,
                        userName: "",
                        password: "",
                        confirmPassword: "",
                        userId: "",
                    }
                }
        }
        case USER_LOGIN : {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    userName: action.userInfo.userName,
                    userId: action.userInfo.password
                }
            }
        }

        default:
            return state;
    }
    return state;
};
//form reducer
//lobby reducer
const appFunctions = combineReducers({
    formManipulation

});

export default appFunctions;