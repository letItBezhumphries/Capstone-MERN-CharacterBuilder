const modifyCharacterForSelectedClass = require('../utility/addClassToCharacter');
const fs = require('fs');
const characters = require('./charactersWithRace');

const charactersOutput = [];

const seedCharactersRandomClassData = function (characters, charactersOutput) {
  return Promise.all(
    characters.map(async (character) => {
      let newCharacter = await modifyCharacterForSelectedClass(
        {
          ...character,
          features: [],
          equipment: [],
          spells: [],
        },
        character.class_type
      );
      charactersOutput.push(newCharacter);
      console.log('newCharacter:', newCharacter);
      return newCharacter;
    })
  );
};

// seedCharactersRandomClassData(characters, charactersOutput);
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
  const newChars = await seedCharactersRandomClassData(characters, charsArray);

  console.log('newChars:', newChars, 'charsArray:', charsArray);

  await writeFile(
    './data/charactersWithClass.js',
    'const characters = ' +
      JSON.stringify(charsArray) +
      '\n\nmodule.exports = characters;'
  );

  console.log('successful');
}

try {
  main(charactersOutput);
} catch (error) {
  console.log('error:', error);
}
