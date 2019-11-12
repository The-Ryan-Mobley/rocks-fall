//const mongoose = require("mongoose");
//const db = require("../models/rules");
const axios = require(`axios`);





function querySpells(pageNumber,spellSeedApi){
    
    axios.get(`https://api.open5e.com/spells/?page=${pageNumber}`).then((result)=>{
        let reData = result.data.results;
        reData.forEach(i => {
            let spellObj = {
                name: i.name,
                description: i.desc,
                higherLevel: i.higher_level,
                range: i.range,
                components: i.components.split(`,`),
                ritual: i.ritual,
                duration: i.duration,
                concentration: i.concentration,
                castingTime: i.casting_time,
                spellLevel: i.level_int,
                school: i.school,
                playerClass: i.dnd_class.split(`,`),
                subClass: i.archetype.split(`,`),
                druidCirlce: i.circles.split(`,`)
                }
            spellSeedApi.push(spellObj);
        });
        console.log(spellSeedApi);
        if(pageNumber < 7){
            pageNumber++;
            querySpells(pageNumber,spellSeedApi);
        } else {
            return spellSeedApi;
        }
        

    });
}
async function queryLoop(){
    let spellSeedApi = [];
    let dataArray = await querySpells(1,spellSeedApi);
    console.log(dataArray);
    
}
queryLoop()
/*
{
        name: ``,
        description: ``,
        higherLevel: ``,
        range: 0,
        components: [`V`,`S`,`M`],
        ritual: false,
        duration: `instant`,
        concentration: false,
        castingTime: `1 action`,
        spellLevel: 0,
        school: ``,
        playerClass: [`Wizard`],
        subClass: [`none`],
        playerRaces: [`none`]
    }
 */
// db.Spells
// .remove({})
// .then(() => db.Spells.collection.insertMany(apellSeed))
// .then(data => {
//   console.log(data.result.n + " records inserted!");
//   process.exit(0);
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// });