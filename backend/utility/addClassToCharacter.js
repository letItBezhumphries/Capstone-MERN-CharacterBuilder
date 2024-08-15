const { faker } = require('@faker-js/faker');

const axios = require('axios');

const DD5CLASSESURL = 'https://www.dnd5eapi.co/api/classes';
const DD5RACESURL = 'https://www.dnd5eapi.co/api/races';
const OPEN5ECLASSURL = 'https://api.open5e.com/classes';
const OPEN5ERACEURL = 'https://api.open5e.com/races';

const APIURL = 'https://www.dnd5eapi.co';
const API2URL = 'https://api.open5e.com/monsters/?limit=100';

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

const joe = require('./joe');

function getRandomAbilityScores(characterObj) {
  let currentIndex = 0;
  let rolls = [];
  while (currentIndex < abilityKeys.length) {
    let currentAbility = abilityKeys[currentIndex];

    // console.log('current ability:', currentAbility);
    let count = 0;
    while (count < 4) {
      let currentRoll = faker.number.int({ min: 0, max: 6 });
      rolls.push(currentRoll);
      count++;
    }
    // console.log('rolls', rolls);

    let score = rolls
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => a + b, 0);

    if (!characterObj[currentAbility]) {
      characterObj[currentAbility] = score;
    } else {
      characterObj[currentAbility] += score;
    }

    rolls = [];
    currentIndex++;
  }
}

/* This function determines the characters hit_points object { current, max } 
and needs to wait until the character has received ability scores
8 (-1) 10 (0) 12 (+1) 14 (+2) 16 (+3) 18 (+4) 20 (+5)
*/
function calculateHitPoints(characterObj) {
  switch (characterObj.constitution) {
    case 18:
      characterObj.constitution_modifier = 4;
      break;
    case 16:
      characterObj.constitution_modifier = 3;
      break;
    case 14:
      characterObj.constitution_modifier = 2;
      break;
    case 12:
      characterObj.constitution_modifier = 1;
      break;
    case 10:
      characterObj.constitution_modifier = 0;
      break;
    case 8:
      characterObj.constitution_modifier = -1;
      break;
    case 6:
      characterObj.constitution_modifier = -2;
      break;
    default:
      characterObj.constitution_modifier = -3;
      break;
  }

  characterObj.hit_points = {
    max:
      characterObj.level * characterObj.hit_die +
      characterObj.constitution_modifier,
    current:
      characterObj.level * characterObj.hit_die +
      characterObj.constitution_modifier,
  };
  // add your characters constitution modifier + character.hitdie
}

const getSpellsAvailableForClass = async (characterObj) => {
  try {
    // GET /api/classes/:index/spells
    const spellsResponse = await axios.get(
      APIURL + `/api/classes/${characterObj.class_type}/spells`
    );

    if (spellsResponse.data.count === 0) {
      return;
    } else {
      let spellsAvailableToCharacter = spellsResponse.data.results.filter(
        (spell) => spell.level <= characterObj.level
      );

      let currentLevel = 1;
      let canTripsCount = 0;
      let availableSpells;

      while (canTripsCount < characterObj.cantrips_known) {
        availableSpells = spellsAvailableToCharacter.filter(
          (s) => s.level === 0
        );

        let randomSpellIndex = faker.number.int({
          min: 0,
          max: availableSpells.length - 1,
        });

        let randomSpell = availableSpells[randomSpellIndex];

        // console.log(
        //   'availableSpells cantrips:',
        //   availableSpells,
        //   'length:',
        //   availableSpells.length,
        //   'random index:',
        //   randomSpellIndex,
        //   'random spell:',
        //   randomSpell
        // );
        characterObj.spells.push(randomSpell);

        availableSpells.splice(randomSpellIndex, 1);

        canTripsCount++;
      }

      while (currentLevel <= characterObj.level) {
        let key = `spell_slots_level_${currentLevel}`;

        let currentLevelSpellCount = characterObj[key];
        // console.log('currentLevelSpellCount:', currentLevelSpellCount);

        availableSpells = spellsAvailableToCharacter.filter(
          (spell) => spell.level === currentLevel
        );

        if (currentLevelSpellCount > 0) {
          let spellCount = 0;

          while (spellCount < currentLevelSpellCount) {
            let randomSpellIndex = faker.number.int({
              min: 0,
              max: availableSpells.length - 1,
            });

            let randomSpell = availableSpells[randomSpellIndex];

            // console.log(
            //   `availableSpells level-${currentLevel}:`,
            //   availableSpells,
            //   'length:',
            //   availableSpells.length,
            //   'random index:',
            //   randomSpellIndex,
            //   'random spell:',
            //   randomSpell
            // );

            characterObj.spells.push(randomSpell);

            availableSpells.splice(randomSpellIndex, 1);

            spellCount++;
          }
        }
        currentLevel++;
      }
    }
  } catch (error) {
    console.error('error', error);
  }
};

/* function will return a list of the proficiencies that are available to select 
  in that they are not found to already be present on character's list of proficiencies
*/
function getListOfProficiencies(proficiencies, character) {
  let filteredProficiencies;
  // iterate over each proficiency in character.proficiencies
  character.proficiencies.forEach((p) => {
    filteredProficiencies = proficiencies.filter(
      (proficiency) => proficiency.item.index !== p.index
    );
  });
  return filteredProficiencies;
}

const selectRandomProficiencyChoices = (charObj, optionsObj) => {
  try {
    const { desc, choose, type, from } = optionsObj;

    if (from.option_set_type === 'options_array') {
      let count = choose;
      while (count > 0) {
        // assign the filteredProficiencies to results of getListOfProficiencies
        // filteredProficiencies = getListOfProficiencies(from.options, charObj);

        // // store a random proficiency from the from.options array
        let randomProficiency =
          from.options[
            faker.number.int({
              min: 0,
              max: from.options.length - 1,
            })
          ];

        // push the random option choice into the charObj.proficiencies array
        charObj.proficiencies.push(randomProficiency.item);

        count--;
      }
    }
  } catch (error) {
    console.log('error:', error);
  }
};

const getEquipmentChoice = async (charObj, equipment_category) => {
  try {
    console.log(
      'in getEquipmentChoice the choice passed in:',
      equipment_category
    );
    const { data } = await axios.get(
      APIURL + equipment_category.from.equipment_category.url
    );

    let randomEquipmentChoice =
      data.equipment[
        faker.number.int({ min: 0, max: data.equipment.length - 1 })
      ];

    console.log(
      'in getEquipmentChoice equipmentChoice:',
      randomEquipmentChoice
    );

    charObj.equipment.push(randomEquipmentChoice);
    // console.log('equipmentRes:', data);
  } catch (error) {
    console.log(error);
  }
};

const selectStartingEquipmentOptions = async (charObj, equipmentOptions) => {
  // console.log(
  //   'in selectStartingEquipmentOptions equipmentOptions:',
  //   equipmentOptions
  // );
  // iterate over each equipment option
  equipmentOptions.forEach((equipOp, index) => {
    let { desc, choose, type, from } = equipOp;

    console.log('LOOPING over each equipOp:', equipOp, 'index:', index);

    if (from.option_set_type === 'options_array') {
      let count = choose;

      // iterate over the options property in from object
      while (count > 0) {
        let randomOption =
          from.options[
            faker.number.int({ min: 0, max: from.options.length - 1 })
          ];

        if (randomOption.option_type === 'counted_reference') {
          charObj.equipment.push({
            name: randomOption.of.name,
            index: randomOption.of.index,
            quantity: randomOption.count,
            url: randomOption.of.url,
          });
        }

        if (randomOption.option_type === 'multiple') {
          randomOption.items.forEach((item) => {
            console.log('in option type = multiple -> item:', item);
            if (item.option_type === 'choice') {
              getEquipmentChoice(charObj, item.choice);
            } else {
              charObj.equipment.push({
                index: item.of.index,
                name: item.of.name,
                url: item.of.url,
                quantity: item.count,
              });
            }
          });
        }

        if (randomOption.option_type === 'equipment_category') {
          getEquipmentChoice(charObj, randomOption);
        }

        if (randomOption.option_type === 'choice') {
          getEquipmentChoice(charObj, randomOption.choice);
        }
        count--;
      }
    }

    if (from.option_set_type === 'equipment_category') {
      getEquipmentChoice(charObj, equipOp);
    }
  });
};

const setStartingEquipment = (charObj, starting_equipment) => {
  starting_equipment.forEach((item) => {
    const newItem = { ...item.equipment, quantity: item.quantity };
    // console.log('in setStartingEquipment:', newItem);
    charObj.equipment.push(newItem);
  });
};

const getLevelResourcesForCharacterClass = async (charObj, class_type) => {
  try {
    const { data } = await axios.get(
      APIURL + `/api/classes/${class_type}/levels`
    );

    // filter out all levels greater than the charObj.level
    const resources = data.filter((r) => r.level <= charObj.level);

    // console.log('resources:', resources);

    resources.forEach((r) => {
      if (r.spellcasting) {
        for (let key in r.spellcasting) {
          charObj[key] = r.spellcasting[key];
        }
      }

      charObj.ability_score_bonuses = r.ability_score_bonuses;
      charObj.prof_bonus = r.prof_bonus;

      // iterate over features
      r.features.forEach((feature) => {
        charObj.features.push(feature);
      });

      charObj.class_specific = r.class_specific;
    });

    // console.log('classLevel repsonse:', resources);
  } catch (error) {
    console.error('error', error);
  }
};

// features
const getFeatureDescriptions = async (charObj, features) => {
  try {
    features.forEach(async (feature, idx) => {
      let { data } = await axios.get(APIURL + `/api/features/${feature.index}`);
      console.log('the feature data desc', data.desc);
      charObj.features[idx].desc = data.desc;
    });
  } catch (error) {
    console.log('error');
  }
};

//equipment
const getEquipmentDescriptions = async (charObj, equipment) => {
  try {
    equipment.forEach(async (equip, idx) => {
      let { data } = await axios.get(APIURL + `/api/equipment/${equip.index}`);
      console.log('the feature data desc', data.desc);
      charObj.equipment[idx].desc = data.desc;
    });
  } catch (error) {
    console.log('error');
  }
};

//spells
const getSpellDescriptions = async (charObj, spells) => {
  try {
    spells.forEach(async (spell, idx) => {
      let { data } = await axios.get(APIURL + `/api/spells/${spell.index}`);
      console.log('the spell data', data);
      charObj.spells[idx] = data;
    });
  } catch (error) {
    console.log('error');
  }
};

/* Function that modifies the character object  based on the selected class */
const modifyCharacterForSelectedClass = async (charObj, classType) => {
  try {
    const { data } = await axios.get(DD5CLASSESURL + `/${classType}`);
    console.log('in modifyCharacter func -> data:', data);
    const dataKeys = Object.keys(data);

    // handle assigning random proficiencies from choices
    if (dataKeys.indexOf('proficiency_choices') !== -1) {
      // console.log('proficiency_choices:', data.proficiency_choices[0]);
      selectRandomProficiencyChoices(charObj, data.proficiency_choices[0]);
    }
    // handle adding proficiencies
    if (data.proficiencies.length > 0) {
      charObj.proficiencies = [...charObj.proficiencies, ...data.proficiencies];
    }

    // give character random ability scores
    getRandomAbilityScores(charObj);

    // give character a random level between 1 and 3
    charObj.level = faker.number.int({ min: 1, max: 3 });

    // handle adding equipment options and starting equipment
    if (
      data.starting_equipment_options &&
      data.starting_equipment_options.length > 0
    ) {
      selectStartingEquipmentOptions(charObj, data.starting_equipment_options);
    }

    setStartingEquipment(charObj, data.starting_equipment);

    // handle adding saving throws
    if (data.saving_throws.length > 0) {
      if (!charObj.saving_throws) {
        charObj.saving_throws = data.saving_throws;
      } else {
        charObj.saving_throws = [
          ...charObj.saving_throws,
          ...data.saving_throws,
        ];
      }
    }

    // assign hit die
    charObj.hit_die = data.hit_die;

    // calculate hit points
    calculateHitPoints(charObj);

    // get resources for character based on class and level
    await getLevelResourcesForCharacterClass(charObj, classType);

    // assign the spellcasting info object to the character
    charObj.spellcasting = data.spellcasting;

    // get spells for class based on level
    await getSpellsAvailableForClass(charObj);

    if (charObj.level === 3) {
      charObj.experience_points = faker.number.int({ min: 600, max: 899 });
    } else if (charObj.level === 2) {
      charObj.experience_points = faker.number.int({ min: 300, max: 599 });
    } else {
      charObj.experience_points = faker.number.int({ min: 0, max: 299 });
    }

    // console.log('spellCasting info:', data.spellcasting.info);
    // console.log('at end:', charObj);
    return charObj;
  } catch (error) {
    console.error('error', error);
  }
};

modifyCharacterForSelectedClass(joe, joe.class_type);
// modifyCharacterForSelectedClass(joe, 'barbarian');
// modifyCharacterForSelectedClass(joe, 'bard');
// modifyCharacterForSelectedClass(joe, 'cleric');
// modifyCharacterForSelectedClass(joe, 'druid');
// modifyCharacterForSelectedClass(joe, 'fighter');
// modifyCharacterForSelectedClass(joe, 'monk');
// modifyCharacterForSelectedClass(joe, 'paladin');
// modifyCharacterForSelectedClass(joe, 'ranger');
// modifyCharacterForSelectedClass(joe, 'rogue');
// modifyCharacterForSelectedClass(joe, 'sorcerer');
// modifyCharacterForSelectedClass(joe, 'warlock');
// modifyCharacterForSelectedClass(joe, 'wizard');

module.exports = modifyCharacterForSelectedClass;
