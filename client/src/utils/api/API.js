import axios from "axios";

export default {
    newUser: (userData) =>{
        return axios.post("/api/auth/new", userData);
    },
    queryUser: (userData) =>{
        return axios.get("/api/auth/login", {params: userData});
    },
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
        //going to take lobby name and lobby passwords then sends and validates room join in socket
    },
    deleteLobby: (lobbyId) => {

    },
    spellsByClass: (playerClass)=>{
        return axios.get("/api/game/spells/"+playerClass);
    },
    spellsByLevel: (level)=>{
        return axios.get("/api/game/spells/"+level);
    }
};