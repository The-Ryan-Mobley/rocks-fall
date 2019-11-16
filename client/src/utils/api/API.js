import axios from "axios";

export default {
    newUser: (userData) =>{
        return axios.post("/api/users/new", userData);
    },
    spellsByClass: (playerClass)=>{
        return axios.get("/api/game/spells/"+playerClass);
    },
    spellsByLevel: (level)=>{
        return axios.get("/api/game/spells/"+level);
    }
};