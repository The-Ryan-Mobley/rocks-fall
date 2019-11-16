export const USER_INPUT_CHANGE = `INPUT_CHANGE`;

export const userInputChange = (event) =>{
    debugger;
    return { type: USER_INPUT_CHANGE, name:event.target.name, value: event.target.value, key: Date.now()};
},
