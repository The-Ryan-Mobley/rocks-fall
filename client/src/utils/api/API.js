import axios from "axios";

export default {
    newUser: (userData) =>{
        console.log("ayyyyyyyyyyyyyyyyyyyyyyy lamo")
        return axios.post("/api/auth/new", userData);
    },
    spellsByClass: (playerClass)=>{
        return axios.get("/api/game/spells/"+playerClass);
    },
    spellsByLevel: (level)=>{
        return axios.get("/api/game/spells/"+level);
    }
};