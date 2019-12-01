import { combineReducers } from "redux";
import {USER_INPUT_CHANGE, USER_CREATE_ACCOUNT, USER_LOGIN, SAVE_SESSION_DATA} from "../actions/actions";
import {
    LOBBY_INPUT_CHANGE, 
    LOBBY_HOST_DATA, 
    LOBBY_USER_JOIN, 
    LOBBY_USER_SET, 
    LOBBY_MESSAGE_RESET, 
    LOBBY_MESSAGE_CHANGE, 
    LOBBY_MESSAGE_ADD
} from "../actions/actions";

import {
    CHARACTER_INPUT_CHANGE, 
    CHARACTER_STATS_CHANGE, 
    SET_BLANK_CHARACTER, 
    UPDATE_SPELL_SLOTS, 
    UPDATE_SPELLS_KNOWN,
    SET_PRIMARY_STATS,
    SET_STRING_ARRAY
} from "../actions/actions";

import {SET_SPELL_QUERY, SET_VIEWED_SPELL} from "../actions/actions";
import {SWAP_MODAL_BOOL, CLOSE_MODAL} from "../actions/actions";

const initialState = {
    userData: {
        userName: "",
        password: "",
        confirmPassword: "",
        userThumbnail: "",
        userId: "",
        currentCharacter: "",
        characterList: []
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
        _id: "",
        characterName: "",
        level: null,
        health: null,
        hitDie: null,
        experience: null,
        stats: [8,8,8,8,8,8],
        primaryStats: [],
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
        proficiencyBonus: 2,
        skillProficiency: [],
        toolProficiency: "",
        languages: [],
        armorClass: null,
        initiative: null,
        speed: null,
        spellSaveDc: 8,
        spellAttackBonus: 0,
        spellSlots: [10,4,6,0,0,0,0,0,0],
        spellCastingClass: "Bard",
        spellCastingStat: "Charisma",
        spellsKnown: [],
        inventory: [],
        featsAndTraits: [],
        authorId: ""
    },
    spellData: {
        spellQuery: [],
        viewedSpell: {}
    },
    modalData: {
        sheetModal: false,
        createModal: false,
        newCharacter: false,
        joinModal: false,
        confirmModal: false,
        confirmFlag: null
    }
  };
const modalControls = (state = initialState, action) => {
    switch(action.type) {
        case (SWAP_MODAL_BOOL) : {
            return {
                ...state,
                modalData: {
                    ...state.modalData,
                    [action.bool] : action.value
                }
            }
        }
        case (CLOSE_MODAL) : {
            return {
                ...state,
                modalData: {
                    ...state.modalData,
                    sheetModal: false,
                    createModal: false,
                    newCharacter: false,
                    joinModal: false,
                    confirmModal: false,
                }
            }
        }
        default: return state;
    }
}
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
                    userId: action.userId,
                    currentCharacterId: "",
                    characterList: []
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
        case UPDATE_SPELL_SLOTS : {
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    spellSlots: action.slotArray
                }
            }
        }
        case UPDATE_SPELLS_KNOWN : {
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    spellsKnown: action.knownArray
                }
            }
        }
        case SET_PRIMARY_STATS : {
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    primaryStats: action.statArray
                }
            }
        }
        case SET_STRING_ARRAY : {
            return {
                ...state,
                playerCharacter: {
                    ...state.playerCharacter,
                    [action.name] : action.stringArray
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
const spellReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SPELL_QUERY : {
            return {
                ...state,
                spellData: {
                    ...state.spellData,
                    spellQuery: action.spellArray
                }
            }
        }
        case SET_VIEWED_SPELL : {
            return {
                ...state,
                spellData: {
                    ...state.spellData,
                    viewedSpell: action.spell

                }
                
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
    characterReducer,
    spellReducer,
    modalControls

});

export default appFunctions;