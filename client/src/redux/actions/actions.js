export const USER_INPUT_CHANGE = `USER_INPUT_CHANGE`;
export const USER_CREATE_ACCOUNT = "USER_CREATE_ACCOUNT";
export const USER_LOGIN = "USER_LOGIN";
export const SAVE_SESSION_DATA = "SAVE_SESSION_DATA";

export const userInputChange = (name, value) =>{
    return { type: USER_INPUT_CHANGE, name, value, key: Date.now()};
}
export const userCreateAccount = () =>{
    return {type: USER_CREATE_ACCOUNT, key: Date.now()};
}
export const userLogin = () =>{
    return {type: USER_LOGIN, key: Date.now()};
}
export const saveSession = () => {
    return {type: SAVE_SESSION_DATA, key: Date.now()};
}