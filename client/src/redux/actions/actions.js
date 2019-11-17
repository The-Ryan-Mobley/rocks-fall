export const USER_INPUT_CHANGE = `USER_INPUT_CHANGE`;
export const USER_CREATE_ACCOUNT = "USER_CREATE_ACCOUNT";

export const userInputChange = (name, value) =>{
    return { type: USER_INPUT_CHANGE, name, value, key: Date.now()};
}
export const userCreateAccount = (userData) =>{
    return {type: USER_CREATE_ACCOUNT, userData, key: Date.now()};
}
