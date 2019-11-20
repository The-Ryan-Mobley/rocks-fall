import { combineReducers } from "redux";
import {USER_INPUT_CHANGE, USER_CREATE_ACCOUNT, USER_LOGIN, SAVE_SESSION_DATA} from "../actions/actions";
import {LOBBY_INPUT_CHANGE, LOBBY_HOST_DATA} from "../actions/actions";

const initialState = {
    userData: {
        userName: "",
        password: "",
        confirmPassword: "",
        userThumbnail: "",
        userId: "",
    },
    ryanStuff: [],
    lobbyData: {
        lobbyId: "",
        lobbyName: "",
        lobbyPassword: "",
        hostId: "",
        hostName: "",
        activeUsers: [],
        chat: {
            messages: [],
            newMessage: ""
        }
    }
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
                    userName: action.userName,
                    password: "",
                    userThumbnail: action.userThumbnail,
                    userId: action.userId
                }
            }
        }
        case SAVE_SESSION_DATA : {
            return {
                ...state,
                userData: action.localData
            }
        }

        default:
            return state;
    }
    return state;
};
const lobbyManipulation = (state = initialState, action) => {
    switch(action.type){
        case LOBBY_INPUT_CHANGE : {
            return {
                ...state,
                lobbyData: {
                    ...state.lobbyData,
                    [action.name]: action.value
                }
            }
        }
        case LOBBY_HOST_DATA : {
            console.table(action);
            return {
                ...state,
                lobbyData: {
                    ...state.lobbyData,
                    hostId: action.id,
                    hostName: action.name
                }
            }
        }

        default: 
            return state;
    }
    return state;

}
//form reducer
//lobby reducer
const appFunctions = combineReducers({
    formManipulation,
    lobbyManipulation

});

export default appFunctions;