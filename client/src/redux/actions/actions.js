export const USER_INPUT_CHANGE = `USER_INPUT_CHANGE`;

export const userInputChange = (name, value) =>{
    return { type: USER_INPUT_CHANGE, name, value, key: Date.now()};
}
