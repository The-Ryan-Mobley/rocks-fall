import axios from "axios";

export default {
    newUser: (userData) =>{
        return axios.post("/api/auth/new", userData);
    },
    loginUser: (userData) =>{
        return axios.get("/api/user/login", {params: userData});
    },
    spellsByClass: (playerClass)=>{
        return axios.get("/api/game/spells/"+playerClass);
    },
    spellsByLevel: (level)=>{
        return axios.get("/api/game/spells/"+level);
    }
};