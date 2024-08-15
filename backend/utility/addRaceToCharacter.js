const { faker } = require('@faker-js/faker');
const axios = require('axios');
const { characterAlignments } = require('../data/selects');
const DD5RACESURL = 'https://www.dnd5eapi.co/api/races';
const APIURL = 'https://www.dnd5eapi.co';

axios.default.defaults.headers.common = {
  Accept: 'application/json',
};

axios.default.defaults.baseURL = 'https://www.dnd5eapi.co';

const abilityKeys = [
  'strength',
  'dexterity',
  'constitution',
  'intelligence',
  'wisdom',
  'charisma',
];

/* For Frontend possibly */
const defaultAbilityScoresArray = [15, 14, 13, 12, 10, 8];
const generateRollScoresArray = function () {
  let rollScores = [];
  let rolls = [];
  let currentIndex = 0;
  while (currentIndex < abilityKeys.length) {
    let count = 0;
    while (count < 4) {
      let currentRoll = faker.number.int({ min: 0, max: 6 });
      rolls.push(currentRoll);
      count++;
    }

    let score = rolls
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => a + b, 0);

    rollScores.push(score);
    rolls = [];
    currentIndex++;
  }
  console.log('rollScores returned:', rollScores);
  return rollScores;
};

const getRaceAbilityBonus = async (charObj, abilitiesArray) => {
  if (charObj.ability_bonuses !== undefined) {
    abilitiesArray = [...abilitiesArray, ...charObj.ability_bonuses];
  }
  abilitiesArray.forEach((ability) => {
    const { ability_score, bonus } = ability;
    // console.log('ability_score:', ability_score, 'bonus:', bonus);
    if (ability_score.index === 'dex') {
      charObj.dexterity = bonus;
    }
    if (ability_score.index === 'con') {
      charObj.constitution = bonus;
    }
    if (ability_score.index === 'int') {
      charObj.intelligence = bonus;
    }
    if (ability_score.index === 'wis') {
      charObj.wisdom = bonus;
    }
    if (ability_score.index === 'str') {
      charObj.strength = bonus;
    }
    if (ability_score.index === 'cha') {
      charObj.charisma = bonus;
    }
  });
  return charObj;
};

const selectRandomAlignment = function (race) {
  if (race === 'elf' || race === 'half-elf') {
    let alignments = [
      {
        index: 'chaotic-evil',
        name: 'Chaotic Evil',
        url: '/api/alignments/chaotic-evil',
      },
      {
        index: 'chaotic-good',
        name: 'Chaotic Good',
        url: '/api/alignments/chaotic-good',
      },
      {
        index: 'chaotic-neutral',
        name: 'Chaotic Neutral',
        url: '/api/alignments/chaotic-neutral',
      },
      {
        index: 'chaotic-good',
        name: 'Chaotic Good',
        url: '/api/alignments/chaotic-good',
      },
      {
        index: 'chaotic-neutral',
        name: 'Chaotic Neutral',
        url: '/api/alignments/chaotic-neutral',
      },
      {
        index: 'chaotic-good',
        name: 'Chaotic Good',
        url: '/api/alignments/chaotic-good',
      },
      {
        index: 'chaotic-neutral',
        name: 'Chaotic Neutral',
        url: '/api/alignments/chaotic-neutral',
      },
      {
        index: 'chaotic-good',
        name: 'Chaotic Good',
        url: '/api/alignments/chaotic-good',
      },
      {
        index: 'chaotic-neutral',
        name: 'Chaotic Neutral',
        url: '/api/alignments/chaotic-neutral',
      },
      {
        index: 'chaotic-good',
        name: 'Chaotic Good',
        url: '/api/alignments/chaotic-good',
      },
      {
        index: 'chaotic-good',
        name: 'Chaotic Good',
        url: '/api/alignments/chaotic-good',
      },
    ];
    let randomIndex = faker.number.int({ min: 0, max: alignments.length - 1 });
    return alignments[randomIndex].index;
  } else if (race === 'gnome') {
    let alignments = [
      {
        index: 'chaotic-good',
        name: 'Chaotic Good',
        url: '/api/alignments/chaotic-good',
      },
      {
        index: 'lawful-good',
        name: 'Lawful Good',
        url: '/api/alignments/lawful-good',
      },
      {
        index: 'lawful-neutral',
        name: 'Lawful Neutral',
        url: '/api/alignments/lawful-neutral',
      },
      {
        index: 'neutral-good',
        name: 'Neutral Good',
        url: '/api/alignments/neutral-good',
      },
      {
        index: 'lawful-neutral',
        name: 'Lawful Neutral',
        url: '/api/alignments/lawful-neutral',
      },
      {
        index: 'lawful-good',
        name: 'Lawful Good',
        url: '/api/alignments/lawful-good',
      },
      {
        index: 'lawful-good',
        name: 'Lawful Good',
        url: '/api/alignments/lawful-good',
      },
      {
        index: 'chaotic-good',
        name: 'Chaotic Good',
        url: '/api/alignments/chaotic-good',
      },
    ];
    let randomIndex = faker.number.int({ min: 0, max: alignments.length - 1 });
    return alignments[randomIndex].index;
  } else if (race === 'dwarf') {
    let alignments = [
      {
        index: 'lawful-good',
        name: 'Lawful Good',
        url: '/api/alignments/lawful-good',
      },
      {
        index: 'lawful-neutral',
        name: 'Lawful Neutral',
        url: '/api/alignments/lawful-neutral',
      },
      {
        index: 'lawful-good',
        name: 'Lawful Good',
        url: '/api/alignments/lawful-good',
      },
      {
        index: 'lawful-neutral',
        name: 'Lawful Neutral',
        url: '/api/alignments/lawful-neutral',
      },
      {
        index: 'lawful-good',
        name: 'Lawful Good',
        url: '/api/alignments/lawful-good',
      },
      {
        index: 'lawful-neutral',
        name: 'Lawful Neutral',
        url: '/api/alignments/lawful-neutral',
      },
      {
        index: 'lawful-good',
        name: 'Lawful Good',
        url: '/api/alignments/lawful-good',
      },
      {
        index: 'lawful-neutral',
        name: 'Lawful Neutral',
        url: '/api/alignments/lawful-neutral',
      },
    ];
    let randomIndex = faker.number.int({ min: 0, max: alignments.length - 1 });
    return alignments[randomIndex].index;
  } else if (race === 'tiefling') {
    let alignments = [
      {
        index: 'chaotic-good',
        name: 'Chaotic Good',
        url: '/api/alignments/chaotic-good',
      },
      {
        index: 'chaotic-evil',
        name: 'Chaotic Evil',
        url: '/api/alignments/chaotic-evil',
      },
      {
        index: 'chaotic-neutral',
        name: 'Chaotic Neutral',
        url: '/api/alignments/chaotic-neutral',
      },
      {
        index: 'chaotic-evil',
        name: 'Chaotic Evil',
        url: '/api/alignments/chaotic-evil',
      },
      {
        index: 'chaotic-neutral',
        name: 'Chaotic Neutral',
        url: '/api/alignments/chaotic-neutral',
      },
      {
        index: 'chaotic-evil',
        name: 'Chaotic Evil',
        url: '/api/alignments/chaotic-evil',
      },
      {
        index: 'chaotic-neutral',
        name: 'Chaotic Neutral',
        url: '/api/alignments/chaotic-neutral',
      },
      {
        index: 'chaotic-evil',
        name: 'Chaotic Evil',
        url: '/api/alignments/chaotic-evil',
      },
    ];
    let randomIndex = faker.number.int({ min: 0, max: alignments.length - 1 });
    return alignments[randomIndex].index;
  } else if (race === 'halfling') {
    let alignments = [
      {
        index: 'lawful-good',
        name: 'Lawful Good',
        url: '/api/alignments/lawful-good',
      },
      {
        index: 'lawful-neutral',
        name: 'Lawful Neutral',
        url: '/api/alignments/lawful-neutral',
      },
      {
        index: 'lawful-good',
        name: 'Lawful Good',
        url: '/api/alignments/lawful-good',
      },
    ];
    let randomIndex = faker.number.int({ min: 0, max: alignments.length - 1 });
    return alignments[randomIndex].index;
  } else if (race === 'human') {
    let alignments = characterAlignments;
    let randomIndex = faker.number.int({ min: 0, max: alignments.length - 1 });
    return alignments[randomIndex].index;
  } else if (race === 'half-orc') {
    let alignments = [
      {
        index: 'chaotic-evil',
        name: 'Chaotic Evil',
        url: '/api/alignments/chaotic-evil',
      },
      {
        index: 'chaotic-good',
        name: 'Chaotic Good',
        url: '/api/alignments/chaotic-good',
      },
      {
        index: 'chaotic-neutral',
        name: 'Chaotic Neutral',
        url: '/api/alignments/chaotic-neutral',
      },
      {
        index: 'chaotic-evil',
        name: 'Chaotic Evil',
        url: '/api/alignments/chaotic-evil',
      },
      {
        index: 'chaotic-evil',
        name: 'Chaotic Evil',
        url: '/api/alignments/chaotic-evil',
      },
      {
        index: 'chaotic-neutral',
        name: 'Chaotic Neutral',
        url: '/api/alignments/chaotic-neutral',
      },
      {
        index: 'chaotic-evil',
        name: 'Chaotic Evil',
        url: '/api/alignments/chaotic-evil',
      },
      {
        index: 'chaotic-neutral',
        name: 'Chaotic Neutral',
        url: '/api/alignments/chaotic-neutral',
      },
    ];
    let randomIndex = faker.number.int({ min: 0, max: alignments.length - 1 });
    return alignments[randomIndex].index;
  } else {
    let alignments = [
      {
        index: 'lawful-evil',
        name: 'Lawful Evil',
        url: '/api/alignments/lawful-evil',
      },
      {
        index: 'lawful-good',
        name: 'Lawful Good',
        url: '/api/alignments/lawful-good',
      },
      {
        index: 'neutral-evil',
        name: 'Neutral Evil',
        url: '/api/alignments/neutral-evil',
      },
      {
        index: 'neutral-good',
        name: 'Neutral Good',
        url: '/api/alignments/neutral-good',
      },
    ];
    let randomIndex = faker.number.int({ min: 0, max: alignments.length - 1 });
    return alignments[randomIndex].index;
  }
};

const setRandomStartingAge = function (ageDescription, race) {
  // the following regex matches any successive numbers in description string
  let ageRange = ageDescription.match(/-?\d(?:[,\d]*\.\d+|[,\d]*)/g);
  if (race === 'human' || race === 'tiefling' || race === 'dragonborn') {
    return faker.number.int({ min: 16, max: 80 });
  } else {
    return faker.number.int({
      min: parseInt(ageRange[0]),
      max: race === 'halfling' ? 250 : parseInt(ageRange[1]),
    });
  }
};

const setRandomStartingOptions = async (charObj, optionsObj) => {
  try {
    const {
      desc,
      choose,
      type,
      from: { option_set_type, options },
    } = optionsObj;

    let count = choose;
    while (count > 0) {
      let randomOptionIndex = faker.number.int({
        min: 0,
        max: options.length - 1,
      });
      let randomOption = options[randomOptionIndex];
      // console.log('in setStartingProficiency:', randomOption);

      if (type === 'proficiencies') {
        charObj.proficiencies.push(randomOption.item);
      }

      if (type === 'ability_bonuses') {
        charObj.ability_bonuses = [];
        charObj.ability_bonuses.push({
          desc: desc,
          ability_score: randomOption.ability_score,
          bonus: randomOption.bonus,
        });
      }

      if (type === 'languages') {
        charObj.languages.push(randomOption.item);
      }
      count--;
    }
  } catch (error) {
    console.log('error:', error);
  }
};

// function that iterates over the passed in proficiencies received from a request for all character options related to a race from the api need to iterate each proficiency and make a follow up request to populate the description for each proficiency
const getRaceTraits = function (traits) {
  return Promise.all(
    traits.map(async (trait) => {
      const res = await fetch(APIURL + `/api/traits/${trait.index}`);
      const traitRes = await res.json();

      return {
        ...trait,
        desc: traitRes.desc[0],
      };
    })
  );
};

// function that iterates over the passed in proficiencies received from a request for all character options related to a race from the api need to iterate each proficiency and make a follow up request to populate the description for each proficiency
const getRaceProficiencyDescriptions = function (proficiencies) {
  return Promise.all(
    proficiencies.map(async (proficiency) => {
      let res;
      if (proficiency.name.split(':')[0] === 'Skill') {
        res = await fetch(
          APIURL + `/api/skills/${proficiency.index.split('-')[1]}`
        );
      } else {
        res = await fetch(APIURL + `/api/proficiencies/${proficiency.index}`);
      }
      const profRes = await res.json();
      // console.log('desc:', profRes.desc);
      return {
        ...proficiency,
        desc: profRes.desc,
        ability_score: profRes.ability_score,
      };
    })
  );
};

// This is the main function that takes a character Obj as the first parameter and
// the race string as the 2nd parameter
const modifyCharacterForSelectedRace = async (charObj, race) => {
  try {
    const { data } = await axios.get(DD5RACESURL + `/${race}`);

    const dataKeys = Object.keys(data);
    // console.log('open5erace response:', open5eRace.data);

    charObj.race = data.index;
    charObj.alignment_desc = data.alignment;
    charObj.alignment = selectRandomAlignment(race);

    charObj.speed = { walk: data.speed };
    charObj.age_desc = data.age;
    charObj.age = setRandomStartingAge(data.age, race);
    charObj.size = data.size;
    charObj.size_desc = data.size_description;

    let charTraits = await getRaceTraits(data.traits);
    charObj.traits = charTraits;

    let charProficiencies = data.starting_proficiencies
      ? await getRaceProficiencyDescriptions(data.starting_proficiencies)
      : [];

    charObj.proficiencies = charProficiencies;
    charObj.languages = data.languages;
    charObj.language_desc = data.language_desc;
    if (dataKeys.indexOf('starting_proficiency_options') !== -1) {
      setRandomStartingOptions(charObj, data.starting_proficiency_options);
    }

    if (dataKeys.indexOf('ability_bonus_options') !== -1) {
      setRandomStartingOptions(charObj, data.ability_bonus_options);
    }

    if (dataKeys.indexOf('language_options') !== -1) {
      setRandomStartingOptions(charObj, data.language_options);
    }

    getRaceAbilityBonus(charObj, data.ability_bonuses);

    // make adjustments to ability scores from proficiencies
    charObj.proficiencies.forEach((p) => {
      if (p.ability_score) {
        switch (p.ability_score.name) {
          case 'WIS':
            if (!charObj.wisdom) {
              charObj.wisdom = 1;
            } else {
              charObj.wisdom = charObj.wisdom + 1;
            }
            break;
          case 'INT':
            if (!charObj.intelligence) {
              charObj.intelligence = 1;
            } else {
              charObj.intelligence = charObj.intelligence + 1;
            }
            break;
          case 'CON':
            if (!charObj.constitution) {
              charObj.constitution = 1;
            } else {
              charObj.constitution = charObj.constitution + 1;
            }
            break;
          case 'STR':
            if (!charObj.strength) {
              charObj.strength = 1;
            } else {
              charObj.strength = charObj.strength + 1;
            }
            break;
          case 'DEX':
            if (!charObj.dexterity) {
              charObj.dexterity = 1;
            } else {
              charObj.dexterity = charObj.dexterity + 1;
            }
            break;
          case 'CHA':
            if (!charObj.charisma) {
              charObj.charisma = 1;
            } else {
              charObj.charisma = charObj.charisma + 1;
            }
            break;
          default:
            break;
        }
      }
    });

    // console.log('charObj at end:', charObj);
    return charObj;
  } catch (error) {
    console.error('error', error);
  }
};

module.exports = modifyCharacterForSelectedRace;
