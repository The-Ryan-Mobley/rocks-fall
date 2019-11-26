import { combineReducers } from "redux";
import {USER_INPUT_CHANGE, USER_CREATE_ACCOUNT, USER_LOGIN, SAVE_SESSION_DATA} from "../actions/actions";
import {LOBBY_INPUT_CHANGE, LOBBY_HOST_DATA, LOBBY_USER_JOIN, LOBBY_USER_SET, LOBBY_MESSAGE_RESET, LOBBY_MESSAGE_CHANGE, LOBBY_MESSAGE_ADD} from "../actions/actions";
import {CHARACTER_INPUT_CHANGE, CHARACTER_STATS_CHANGE, SET_BLANK_CHARACTER} from "../actions/actions";

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
    },
    playerCharacter: {
        characterName: "",
        level: null,
        health: null,
        hitDie: null,
        experience: null,
        stats: [8,8,8,8,8,8],
        primaryStats: ["",""],
        playerClass: "",
        subClass: "",
        playerRace: "",
        background: "",
        personalityTraits: "",
        ideals: "",
        bonds: "",
        flaws: "",
        bio: "",
        alignment: "",
        currency: [0,0,0,0,0],
        attunementSlots: ["open","open","open"],
        proficiencyBonus: 2,
        skillProficiency: ["",""],
        toolProficiency: "",
        laguages: ["",""],
        armorClass: null,
        initiative: null,
        speed: null,
        spellCasting: false,
        spellSlots: [0,0,0,0,0,0,0,0,0],
        spellCastingStat: [""],
        spellsKnown: {},
        inventory: {},
        featsAndTrais: {},
        authorId: ""
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
        case LOBBY_MESSAGE_CHANGE : {
            return {
                ...state,
                lobbyData: {
                    ...state.lobbyData,
                    chat: {
                        ...state.lobbyData.chat,
                        [action.name]: action.value
                    }
                }
            }
        }
        case LOBBY_HOST_DATA : {
            return {
                ...state,
                lobbyData: {
                    ...state.lobbyData,
                    hostId: action.id,
                    hostName: action.name
                }
            }
        }
        case LOBBY_USER_JOIN : {
            return {
                ...state,
                lobbyData: {
                    ...state.lobbyData,
                    activeUsers: action.userArray
                }
            }
        }
        case LOBBY_USER_SET : {
            return {
                ...state,
                lobbyData: {
                    ...state.lobbyData,
                    lobbyId: action.foundLobby._id,
                    lobbyName: action.foundLobby.lobbyName,
                    hostName: action.foundLobby.hostName,
                    hostId: action.foundLobby.hostId,
                }
            }
        }
        case LOBBY_MESSAGE_RESET : {
            return {
                ...state,
                lobbyData: {
                    ...state.lobbyData,
                    chat: {
                        ...state.lobbyData.chat,
                        newMessage: ""
                    }

                }
            }
        }
        case LOBBY_MESSAGE_ADD : {
            return {
                ...state,
                lobbyData: {
                    ...state.lobbyData,
                    chat: {
                        ...state.lobbyData.chat,
                        messages: action.messageArr
                    }
                }
            }
        }

        default: 
            return state;
    }

}
const characterReducer = (state = initialState, action) => {
    switch(action.type){
        case CHARACTER_INPUT_CHANGE : {
            
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    [action.name]: action.value
                }
            }
        }
        case CHARACTER_STATS_CHANGE : {
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    stats: action.statArray
                    
                }
            }
        }
        case SET_BLANK_CHARACTER : {
            return {
                ...state,
                playerCharacter: action.blankCharacter
            }
        }

        default: return state;
    }
}
//form reducer
//lobby reducer
const appFunctions = combineReducers({
    formManipulation,
    lobbyManipulation,
    characterReducer

});

export default appFunctions;