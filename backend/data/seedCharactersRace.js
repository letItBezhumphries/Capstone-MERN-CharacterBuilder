const modifyCharacterForSelectedRace = require('../utility/addRaceToCharacter');
const fs = require('fs');

const { faker } = require('@faker-js/faker');
const characters = require('./characters');

const { characterRaces } = require('./selects');

const charactersOutput = [];

const seedCharactersWithRandomRaceData = function (
  characters,
  charactersOutput
) {
  return Promise.all(
    characters.map(async (character) => {
      let randomIndex = faker.number.int({
        min: 0,
        max: characterRaces.length - 1,
      });
      let randomRace = characterRaces[randomIndex].index;
      // console.log('randomRace:', randomRace);
      let newCharacter = await modifyCharacterForSelectedRace(
        character,
        randomRace
      );
      charactersOutput.push(newCharacter);
      console.log('newCharacter:', newCharacter);
      return newCharacter;
    })
  );
};

// seedCharactersWithRandomRaceData(characters, charactersOutput);
// console.log('newCharacters:', charactersOutput);

const writeFile = (path, data) => {
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) reject(err);

      resolve();
    });
  });
};

async function main(charsArray) {
  const newChars = await seedCharactersWithRandomRaceData(
    characters,
    charsArray
  );

  console.log('newChars:', newChars, 'charsArray:', charsArray);

  await writeFile(
    './data/charactersWithRace.js',
    'const characters = ' +
      JSON.stringify(charactersOutput) +
      '\n\nmodule.exports = characters;'
  );

  console.log('successful');
}

try {
  main(charactersOutput);
} catch (error) {
  console.log('error:', error);
}
