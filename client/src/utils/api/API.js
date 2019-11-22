import axios from "axios";

export default {
    //userAuth Routes
    newUser: (userData) =>{
        return axios.post("/api/auth/new", userData);
    },
    queryUser: (userData) =>{
        return axios.get("/api/auth/login", {params: userData});
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
    //spell Routes
    spellsByClass: (playerClass)=>{
        return axios.get("/api/game/spells/"+playerClass);
    },
    spellsByLevel: (level)=>{
        return axios.get("/api/game/spells/"+level);
    }
};