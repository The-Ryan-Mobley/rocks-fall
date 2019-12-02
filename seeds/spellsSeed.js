const mongoose = require("mongoose");
const db = require("../models/");
const axios = require(`axios`);
const SpellSlots = require(`./casters`);
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/rocksFall"
);

function seedSpellSlots() {
    db.SpellProgression
        .remove({})
        .then(() => db.SpellProgression.collection.insertMany(SpellSlots))
        .then(data => {
            console.log(data.result.n + " records inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });

}

function querySpells(pageNumber, spellSeedApi) {
    //spells/?classes=Wizard
    let queryString = `https://api.open5e.com/spells/?page=${pageNumber.toString()}`
    
    axios.get(queryString).then((result) => {
        let reData = result.data.results;
        reData.forEach(i => {
            let spellObj = {
                name: i.name,
                description: i.desc,
                higherLevel: i.higher_level,
                range: i.range,
                components: i.components.split(`, `),
                ritual: i.ritual,
                duration: i.duration,
                concentration: i.concentration,
                castingTime: i.casting_time,
                spellLevel: i.level_int,
                school: i.school,
                playerClass: i.dnd_class.split(`, `),
                subClass: i.archetype.split(`, `),
                druidCirlce: i.circles.split(`, `)
            }
            spellSeedApi.push(spellObj);
        });
        console.log(spellSeedApi);
        if (pageNumber < 7) {
            pageNumber++;
            querySpells(pageNumber, spellSeedApi);
        } else {
            db.Spells.collection.insertMany(spellSeedApi)
                .then(data => {
                    console.log(data.result.n + " records inserted!");
                    seedSpellSlots();
                })
                .catch(err => {
                    console.error(err);
                    process.exit(1);
                });
        }


    });
}
async function queryLoop() {
    let spellSeedApi = [];
    let dataArray = await querySpells(1, spellSeedApi);
    console.log(dataArray);

}
queryLoop()