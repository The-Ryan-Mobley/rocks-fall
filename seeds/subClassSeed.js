const subClassArray = [
    {
        name: ``,
        description: ``,
        subClassTerm: ``,
        spellCasting: false,
        spellsAdded: [`none`],
        levelingTable: [
            {
                level: 3,
                features: [`name`,`effect added`]
            }
        ]
    },
    {
        name: `Champion`,
        description: `The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.`,
        subClassTerm: `Martial Archetype`,
        spellCasting: false,
        spellsAdded: [`none`],
        levelingTable: [
            {
                level: 3,
                features: [`Improved Criticals`,`Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.`]
            },
            {
                level: 7,
                features: [`Remarkable Athlete`,`Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus.
                In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.`]
            },
            {
                level: 10,
                features: [`Additional Fighting Style`,`At 10th level, you can choose a second option from the Fighting Style class feature.`]
            },
            {
                level: 15,
                features: [`Superior Critical`,`Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20.`]
            },
            {
                level: 18,
                features: [`Survivor`,`At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points.`]
            }
        ]
    },
    {
        name: `Thief`,
        description: `You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ.`,
        subClassTerm: `Roguish Archetype`,
        spellCasting: false,
        spellsAdded: [`none`],
        levelingTable: [
            {
                level: 3,
                features: [`Fast Hands`,`Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action.`]
            },
            {
                level: 3,
                features: [`Second-Story Work`,`When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.<br>
                In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.`]
            },
            {
                level: 9,
                features: [`Supreme Sneak`,`Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.`]
            },
            {
                level: 13,
                features: [`Use Magic Device`,`By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.`]
            },
            {
                level: 17,
                features: [`Thief's Reflexes`,`When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.`]
            }
        ]
    },
]