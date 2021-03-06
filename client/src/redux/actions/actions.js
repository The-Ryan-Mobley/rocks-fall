export const USER_INPUT_CHANGE = `USER_INPUT_CHANGE`;
export const USER_CREATE_ACCOUNT = "USER_CREATE_ACCOUNT";
export const USER_LOGIN = "USER_LOGIN";
export const SAVE_SESSION_DATA = "SAVE_SESSION_DATA";
export const SET_CURRENT_CHARACTER = "SET_CURRENT_CHARACTER";

export const LOBBY_INPUT_CHANGE = "LOBBY_INPUT_CHANGE";
export const LOBBY_HOST_DATA = "LOBBY_HOST_DATA";
export const LOBBY_USER_JOIN = "LOBBY_USER_JOIN"; //when user joins push to lobby arr
export const LOBBY_USER_SET = "LOBBY_USER_SET"; 
export const LOBBY_MESSAGE_RESET = "LOBBY_MESSAGE_RESET";
export const LOBBY_MESSAGE_ADD = "LOBBY_MESSAGE_ADD";
export const LOBBY_MESSAGE_CHANGE = "LOBBY_MESSAGE_CHANGE";
export const BLANK_LOBBY = "BLANK_LOBBY";

export const CHARACTER_INPUT_CHANGE = "CHARACTER_INPUT_CHANGE";
export const CHARACTER_STATS_CHANGE = "CHARACTER_STATS_CHANGE";
export const SET_BLANK_CHARACTER = "SET_BLANK_CHARACTER";
export const SET_CHARACTER_DATA = "SET_CHARACTER_DATA";
export const SET_PRIMARY_STATS = "SET_PRIMARY_STATS";
export const SET_STRING_ARRAY = "SET_STRING_ARRAY";
export const SET_OBJECT_ARRAY = "SET_OBJECT_ARRAY";
export const UPDATE_SPELL_SLOTS= "UPDATE_SPELL_SLOTS";
export const UPDATE_SPELLS_KNOWN = "UPDATE_SPELLS_KNOWN";

export const SET_SPELL_QUERY = "SET_SPELL_QUERY";
export const SET_VIEWED_SPELL = "SET_VIEWED_SPELL";

export const SWAP_MODAL_BOOL = "SWAP_MODAL_BOOL";
export const CLOSE_MODAL = "CLOSE_MODAL";




export const userInputChange = (name, value) =>{
    return { type: USER_INPUT_CHANGE, name, value};
}
export const userCreateAccount = () =>{
    return {type: USER_CREATE_ACCOUNT};
}
export const userLogin = (userName, userThumbnail, userId, currentCharacter) =>{
    return {type: USER_LOGIN, userName, userThumbnail, currentCharacter, userId};
}
export const saveSession = (localData) => {
    return {type: SAVE_SESSION_DATA, localData};
}

export const lobbyInputChange = (name, value) => {
    return {type: LOBBY_INPUT_CHANGE, name, value};
}
export const lobbyHostData = (name, id, thumbnail) => {
    return {type: LOBBY_HOST_DATA, name, id, thumbnail};
}
export const lobbyUserJoin = (userArray) => {
    return {type: LOBBY_USER_JOIN, userArray};
}
export const lobbyUserSet = (foundLobby) => {
    return {type: LOBBY_USER_SET, foundLobby}
}
export const lobbyMessageReset = () => {
    return {type: LOBBY_MESSAGE_RESET}
}
export const lobbyMessageAdd = (messageArr) => {
    return {type: LOBBY_MESSAGE_ADD, messageArr}
}
export const lobbyMessageChange = (name , value) => {
    return {type: LOBBY_MESSAGE_CHANGE, name, value}
}
export const blankLobby = () => {
    const blank = {
        lobbyId: "",
        lobbyName: "",
        lobbyPassword: "",
        hostId: "",
        hostName: "",
        hostThumbnail: "",
        activeUsers: [],
        chat: {
            messages: [],
            newMessage: ""
        }
    }
    return {type: BLANK_LOBBY, blank}
}

export const characterInputChange = (name, value) => {
    return {type: CHARACTER_INPUT_CHANGE, name, value}
}
export const characterStatsChange = (statArray) => {
    return {type: CHARACTER_STATS_CHANGE, statArray}
}
export const updateSpellSlots = (slotArray) => {
    return {type: UPDATE_SPELL_SLOTS, slotArray}
}
export const updateSpellsKnown = (knownArray) => {
    return {type: UPDATE_SPELLS_KNOWN, knownArray}
}
export const setPrimaryStats = (statArray) => {
    return {type: SET_PRIMARY_STATS, statArray}
}
export const setStringArray = (name, stringArray) => {
    return {type: SET_STRING_ARRAY, name, stringArray}
}
export const setCharacterData = (objData) => {
    return {type: SET_CHARACTER_DATA, objData}
}

export const setBlankCharacter = () => {
    const blankCharacter = {
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
        spellSlots: [0,0,0,0,0,0,0,0,0,0],
        spellCastingClass: "",
        spellCastingStat: "",
        spellsKnown: [[],[],[],[],[],[],[],[],[],[]],
        inventory: [],
        featsAndTraits: [],
        authorId: ""
    }
    return {type: SET_BLANK_CHARACTER, blankCharacter}
}

export const setSpellQuery = (spellArray) => {
    return {type: SET_SPELL_QUERY, spellArray}
}
export const setViewdSpell = (spell) => {
    return {type: SET_VIEWED_SPELL, spell}
}

export const swapModalBool = (bool, value) => {
    return {type: SWAP_MODAL_BOOL, bool, value}
}
export const closeModals = () => {
    return {type: CLOSE_MODAL}
    
}
