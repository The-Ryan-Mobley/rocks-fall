export const USER_INPUT_CHANGE = `USER_INPUT_CHANGE`;
export const USER_CREATE_ACCOUNT = "USER_CREATE_ACCOUNT";
export const USER_LOGIN = "USER_LOGIN";
export const SAVE_SESSION_DATA = "SAVE_SESSION_DATA";

export const LOBBY_INPUT_CHANGE = "LOBBY_INPUT_CHANGE";
export const LOBBY_HOST_DATA = "LOBBY_HOST_DATA";
export const LOBBY_USER_JOIN = "LOBBY_USER_JOIN"; //when user joins push to lobby arr
export const LOBBY_USER_SET = "LOBBY_USER_SET"; 


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
export const lobbyUserSet = (lobbyData) => {
    return {type: LOBBY_USER_SET, lobbyData, key: Date.now()}
}