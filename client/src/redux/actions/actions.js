export const USER_INPUT_CHANGE = `USER_INPUT_CHANGE`;
export const USER_CREATE_ACCOUNT = "USER_CREATE_ACCOUNT";
export const USER_LOGIN = "USER_LOGIN";
export const SAVE_SESSION_DATA = "SAVE_SESSION_DATA";

export const LOBBY_INPUT_CHANGE = "LOBBY_INPUT_CHANGE";
export const LOBBY_HOST_DATA = "LOBBY_HOST_DATA";
export const LOBBY_USER_JOIN = "LOBBY_USER_JOIN"; //when user joins push to lobby arr
export const LOBBY_USER_SET = "LOBBY_USER_SET"; 
export const LOBBY_MESSAGE_RESET = "LOBBY_MESSAGE_RESET";
export const LOBBY_MESSAGE_ADD = "LOBBY_MESSAGE_ADD";
export const LOBBY_MESSAGE_CHANGE = "LOBBY_MESSAGE_CHANGE";

export const CHARACTER_INPUT_CHANGE = "CHARACTER_INPUT_CHANGE";
export const CHARACTER_STATS_CHANGE = "CHARACTER_STATS_CHANGE";
export const SET_BLANK_CHARACTER = "SET_BLANK_CHARACTER";
export const UPDATE_SPELL_SLOTS= "UPDATE_SPELL_SLOTS";

export const SET_SPELL_QUERY = "SET_SPELL_QUERY";




export const userInputChange = (name, value) =>{
    return { type: USER_INPUT_CHANGE, name, value, key: Date.now()};
}
export const userCreateAccount = () =>{
    return {type: USER_CREATE_ACCOUNT, key: Date.now()};
}
export const userLogin = (userName, userThumbnail, userId) =>{
    return {type: USER_LOGIN, userName, userThumbnail, userId, key: Date.now()};
}
export const saveSession = (localData) => {
    return {type: SAVE_SESSION_DATA, localData, key: Date.now()};
}

export const lobbyInputChange = (name, value) => {
    return {type: LOBBY_INPUT_CHANGE, name, value, key: Date.now()};
}
export const lobbyHostData = (name, id) => {
    return {type: LOBBY_HOST_DATA, name, id, key: Date.now()};
}
export const lobbyUserJoin = (userArray) => {
    return {type: LOBBY_USER_JOIN, userArray, key: Date.now()};
}
export const lobbyUserSet = (foundLobby) => {
    return {type: LOBBY_USER_SET, foundLobby, key: Date.now()}
}
export const lobbyMessageReset = () => {
    return {type: LOBBY_MESSAGE_RESET, key: Date.now()}
}
export const lobbyMessageAdd = (messageArr) => {
    return {type: LOBBY_MESSAGE_ADD, messageArr, key: Date.now()}
}
export const lobbyMessageChange = (name , value) => {
    return {type: LOBBY_MESSAGE_CHANGE, name, value, key: Date.now()}
}

export const characterInputChange = (name, value) => {
    return {type: CHARACTER_INPUT_CHANGE, name, value, key: Date.now()}
}
export const characterStatsChange = (statArray) => {
    return {type: CHARACTER_STATS_CHANGE, statArray, key: Date.now()}
}
export const updateSpellSlots = (slotArray) => {
    return {type: UPDATE_SPELL_SLOTS, slotArray, key: Date.now()}
}
export const setBlankCharacter = () => {
    const blankCharacter = {
        name: "",
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
    return {type: SET_BLANK_CHARACTER, blankCharacter, key: Date.now()}
}

export const setSpellQuery = (spellArray) => {
    return {type: SET_SPELL_QUERY, spellArray, key: Date.now()}
}
