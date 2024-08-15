const { faker } = require('@faker-js/faker');
const fs = require('fs').promises;
// const fs = require('fs');

const axios = require('axios');

const OPEN5ECLASSURL = 'https://api.open5e.com/classes';
const OPEN5ERACEURL = 'https://api.open5e.com/races';

axios.default.defaults.headers.common = {
  Accept: 'application/json',
};

axios.default.defaults.baseURL = OPEN5ECLASSURL;
const abilityKeys = [
  'strength',
  'dexterity',
  'constitution',
  'intelligence',
  'wisdom',
  'charisma',
];
const defaultAbilityScoresArray = [15, 14, 13, 12, 10, 8];
const joe = require('./joe');

const modifyCharacterForSelectedClass = async (
  charObj,
  classType,
  subclass
) => {
  try {
    const { data } = await axios.get(OPEN5ECLASSURL + `/${classType}`);

    console.log('at end:', data);
    const dataKeys = Object.keys(data);

    // if (dataKeys.indexOf('proficiency_choices') !== -1) {
    //   const newProficiencies = selectRandomProficiencyChoices(
    //     charObj,
    //     data.proficiency_choices[0]
    //   );
    //   console.log('newProficiencies:', newProficiencies);
    // }
  } catch (error) {
    console.error('error', error);
  }
};

modifyCharacterForSelectedClass(joe, 'barbarian');
