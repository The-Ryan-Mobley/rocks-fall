import axios from "axios";

export default {
    newUser: (userData) =>{
        return axios.post("/api/auth/new", userData);
    },
    queryUser: (userData) =>{
        return axios.get("/api/auth/login", {params: userData});
    },
    newLobby: (lobbyData) =>{
        console.log("HIT");
        return axios.post("/api/lobby/new", lobbyData);
    },
    findLobby: (hostId) => {
        return axios.get("/api/lobby/host/"+hostId,)
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