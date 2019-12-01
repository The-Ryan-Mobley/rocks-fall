import axios from "axios";

export default {
    //userAuth Routes
    newUser: (userData) =>{
        return axios.post("/api/auth/new", userData);
    },
    queryUser: (userData) =>{
        return axios.get("/api/auth/login", {params: userData});
    },
    userCurrentCharacter: (currentCharacter, userId) => {
        return axios.put("api/auth/currentCharacter/"+userId, {characterId: currentCharacter});
    },
    //lobbyRoutes
    newLobby: (lobbyData) =>{
        return axios.post("/api/lobby/new", lobbyData);
    },
    hostLobby: (hostId) => {
        return axios.get("/api/lobby/host/"+hostId,)
    },
    findLobby: (lobbyId) => {
        return axios.get("/api/lobby/find/"+lobbyId);
    },
    joinLobby: (lobbyData) => {
        return axios.get("/api/lobby/join", {params: lobbyData});
    },
    updateLobby: (lobbyId, userData) => {
        return axios.put("/api/lobby/push/"+lobbyId, userData);
    },
    deleteLobby: (lobbyId) => {
        return axios.delete("/api/lobby/delete/"+lobbyId);
    },
    //character Routes
    createCharacter: (characterData) => {
        return axios.post("/api/game/createCharacter", characterData);
    },
    userCharacterList: userId => {
        return axios.get("/api/game/characterList/"+userId)

    },
    updateCharacter: characterData => {
        return axios.put("/api/game/updateCharacter", characterData);
    },
    deleteCharacter: id => {
        return axios.delete("/api/game/deleteCharacter/"+id);
    },
    findCharacter: id => {
        return axios.get("/api/game/findCharacter/"+id);
    },
    //spell Routes
    spellsByClass: (playerClass)=>{
        return axios.get("/api/game/spells/"+playerClass);
    },
    spellsByLevel: (level)=>{
        return axios.get("/api/game/spells/"+level);
    },
    spellsByLevelAndClass: (level, playerClass) => {
        return axios.get("/api/game/spells/levelAndClass", {params: {level, playerClass}});
    }
};