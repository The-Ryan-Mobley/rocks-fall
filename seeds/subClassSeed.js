const subClassArray = [
    {
        name: `Lore`,
        description: `Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king.
        <br>The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic.
        <br>The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.`,
        subClassTerm: `College`,
        spellCasting: true,
        spellsAdded: [`none`],
        levelingTable: [
            {
                level: 3,
                features: [`Bonus Proficiencies`,`When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.`]
            },
            {
                level: 3,
                features: [`Cutting Word`,`Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the GM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed.`]
            },
            {
                level: 6,
                features: [`Additional Magical Secrets`,`At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know.`]
            },
            {
                level: 14,
                features: [`Peerless Skill`,`Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the GM tells you whether you succeed or fail.`]
            },
        ]
    },
    {
        name: `Berserker`,
        description: `For some barbarians, rage is a means to an end---that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.`,
        subClassTerm: `Path`,
        spellCasting: false,
        spellsAdded: [`none`],
        levelingTable: [
            {
                level: 3,
                features: [`Frenzy`,`Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.`]
            },
            {
                level: 6,
                features: [`Mindless Rage`,`Beginning at 6th level, you can't be srd:charmed or srd:frightened while raging. If you are srd:charmed or srd:frightened when you enter your rage, the effect is suspended for the duration of the rage.`]
            },
            {
                level: 10,
                features: [`Intimidating Presence`,`Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be srd:frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the srd:frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.
                If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.`]
            },
            {
                level: 14,
                features: [`Retaliation`,`Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.`]
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
    {
        name: `Way of the Open Hand`,
        description: `Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.`,
        subClassTerm: `Tradition`,
        spellCasting: false,
        spellsAdded: [`none`],
        levelingTable: [
            {
                level: 3,
                features: [`Open Hand Technique`,`Starting when you choose this tradition at 3rd level, you can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:
                It must succeed on a Dexterity saving throw or be knocked srd:prone.
                It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.
                It can't take reactions until the end of your next turn.`]
            },
            {
                level: 6,
                features: [`Wholeness of Body`,`At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.`]
            },
            {
                level: 11,
                features: [`Tranquility`,`Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a srd:sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus.`]
            },
            {
                level: 17,
                features: [`Quivering Palm`,`At 17th level, you gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.
                <br>You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.`]
            }
        ]
    },
    {
        name: `Hunter`,
        description: `Archetypes`,
        subClassTerm: `Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.`,
        spellCasting: false,
        spellsAdded: [`none`],
        levelingTable: [
            {
                level: 3,
                features: [`name`,`At 3rd level, you gain one of the following features of your choice. 
                <brColossus Slayer<br>
                Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum. You can deal this extra damage only once per turn.
                <br>Giant Killer<br>
                When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.
                <br>Horde Breaker<br>
                Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.`]
            },
            {
                level: 7,
                features: [`Defensive Tactics`,`At 7th level, you gain one of the following features of your choice. 
                <br>Escape the Horde<br>
                Opportunity attacks against you are made with disadvantage.
                <br>Multiattack Defense<br>
                When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.
                <br>Steel Will<br>
                You have advantage on saving throws against being frightened.`]
            },
            {
                level: 11,
                features: [`Multiattack`,`At 11th level, you gain one of the following features of your choice.
                <br>Volley<br>
                You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target.
                <br>Whirlwind Attack<br>
                You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target.
                <br>Superior Hunter's Defense<br>
                At 15th level, you gain one of the following features of your choice.
                <br>Evasion<br>
                When you are subjected to an effect, such as a red dragon's fiery breath or a srd:lightning-bolt spell, that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.
                <br>Stand Against the Tide<br>
                When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.`]
            },
            {
                level: 3,
                features: [`name`,`effect added`]
            }
        ]
    },
    {
        name: `School of Evocation`,
        description: `You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.`,
        subClassTerm: `Arcane Tradition`,
        spellCasting: true,
        spellsAdded: [`none`],
        levelingTable: [
            {
                level: 2,
                features: [`Evocation Savant`,`Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved.`]
            },
            {
                level: 2,
                features: [`Sculpt Spells`,`Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.`]
            },
            {
                level: 6,
                features: [`Potent Cantrip`,`Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip.`]
            },
            {
                level: 10,
                features: [`Empowered Evocation`,`Beginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast.`]
            },
            {
                level: 14,
                features: [`Overchannel`,`Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell.
                <br>The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.`]
            },
        ]
    },
    {
        name: `Life`,
        description: `The Life domain focuses on the vibrant positive energy---one of the fundamental forces of the universe---that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrei).`,
        subClassTerm: `Domain`,
        spellCasting: true,
        spellsAdded: [`bless,curewounds`,`lesser-restoration,spiritual-weapon`,`beacon-of-hope,revivify`,`death-ward,guardian-of-faith`,`mass-cure-wounds,raise-dead`],
        levelingTable: [
            {
                level: 1,
                features: [`Bonus Proficiency`,`When you choose this domain at 1st level, you gain proficiency with heavy armor.`]
            },
            {
                level: 1,
                features: [`Disciple of Life`,`Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.`]
            },
            {
                level: 2,
                features: [`Channel Divinity`,`Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.
                <br>As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.`]
            },
            {
                level: 6,
                features: [`Blessed Healer`,`Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.`]
            },
            {
                level: 8,
                features: [`Divine Strike`,`At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.`]
            },
            {
                level: 17,
                features: [`Supreme Healing`,`Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.`]
            },
        ]
    },
    {
        name: `Draconic Bloodline`,
        description: `Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.`,
        subClassTerm: `Origin`,
        spellCasting: true,
        spellsAdded: [`none`],
        levelingTable: [
            {
                level: 3,
                features: [`Dragon Ancestor`,`At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.<br>
                Black Acid Blue Lightning Brass Fire Bronze Lightning Copper Acid Gold Fire Green Poison Red Fire Silver Cold White Cold<br>
                You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.`]
            },
            {
                level: 1,
                features: [`Draconic Resilience`,`As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.
                <br>Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier.`]
            },
            {
                level: 6,
                features: [`Elemental Affinity`,`Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.`]
            },
            {
                level: 14,
                features: [`Dragon Wings`,`At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.
                <br>You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them.`]
            },
            {
                level: 18,
                features: [`Draconic Presence`,`Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or srd:frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be srd:charmed (if you chose awe) or srd:frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours.`]
            }
        ]
    },
    {
        name: `Fiend`,
        description: `You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.`,
        subClassTerm: `Patron`,
        spellCasting: true,
        spellsAdded: [`burning-hands,command`,`blindness-deafness,scorching-ray`,`fireball,stinking-cloud`,`fire-shield,wall-of-fire`,`lame-strike,hallow`],
        levelingTable: [
            {
                level: 1,
                features: [`Dark One's Blessing`,`Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).`]
            },
            {
                level: 6,
                features: [`Dark One's Own Luck`,`Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur.
                <br>Once you use this feature, you can't use it again until you finish a short or long rest.`]
            },
            {
                level: 10,
                features: [`Fiendish Resilience`,`Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance.`]
            },
            {
                level: 14,
                features: [`Hurl Through Hell`,`Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.
                <br>At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience.
                <br>Once you use this feature, you can't use it again until you finish a long rest.`]
            },
        ]
    },
    {
        name: `Moon`,
        description: `Druids of the Circle of the Moon are fierce guardians of the wilds. Their order gathers under the full moon to share news and trade warnings. They haunt the deepest parts of the wilderness, where they might go for weeks on end before crossing paths with another humanoid creature, let alone another druid.
        <br>Changeable as the moon, a druid of this circle might prowl as a great cat one night, soar over the treetops as an eagle the next day, and crash through the undergrowth in bear form to drive off a trespassing monster. The wild is in the druid's blood.`,
        subClassTerm: `Circle`,
        spellCasting: true,
        spellsAdded: [`none`],
        levelingTable: [
            {
                level: 2,
                features: [`Combat Wild Shape`,`When you choose this circle at 2nd level, you gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.
                <br>Additionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended`]
            },
            {
                level: 2,
                features: [`Circle Forms`,`The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1. You ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there.
                <br>Starting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down`]
            },
            {
                level: 6,
                features: [`Primal Strike`,`Starting at 6th level, your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.`]
            },
            {
                level: 10,
                features: [`Elemental Wild Shape`,`At 10th level, you can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental.`]
            },
            {
                level: 14,
                features: [`Thousand Forms`,`By 14th level, you have learned to use magic to alter your physical form in more subtle ways. You can cast the Alter Self spell at will.`]
            }
        ]
    },
]