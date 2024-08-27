//
function parseTraits(traits, selection) {
  let parsedTraits = traits.split(/\*\*\_/).filter((str) => str.length > 0);

  parsedTraitsArray.forEach((str, index) => {
    if (race === 'dragonborn') {
      if (index > 0) {
        if (index === 1) {
          let name = str.split('._**')[0];
          let description = str.split('._**')[1];
          let table = parsedTraits[0].split('**')[2];

          let parsedTableStr = getTableSelectOptions(table);
          console.log('tableOptions:', parsedTableStr);

          if (!raceTraitNames.includes(name)) {
            raceTraitNames.push(name);
            selectedRaceTraits.push({
              name: name,
              desc: description,
              table: table,
              isChoice: true,
              choices: parsedTableStr.tableOptions,
              headCells: parsedTableStr.headCells,
              tableCells: parsedTableStr.tableCells,
            });
          }
          // its greater than 1
        } else {
          let name = str.split('._**')[0];
          let description = str.split('._**')[1];
          if (!raceTraitNames.includes(name)) {
            raceTraitNames.push(name);
            selectedRaceTraits.push({ name: name, desc: description });
          }
        }
      }
    } else {
      // otherwise its not a dragonborn and you can push the name and trait obj
      let name = str.split('._**')[0];
      let description = str.split('._**')[1];
      if (!raceTraitNames.includes(name)) {
        raceTraitNames.push(name);
        // if the word 'choice' is found in the description then we need to set up choices to select in the overview page
        if (description.split(' ').indexOf('choice:') !== -1) {
          let choices = description
            .split(':')[1]
            .split(/,|or/g)
            .filter((str) => str !== ' ')
            .join(',');
          console.log('description with choice:', choices.split(','));
          selectedRaceTraits.push({
            name: name,
            desc: description,
            isChoice: true,
            choices: choices.split(','),
          });
        } else {
          selectedRaceTraits.push({ name: name, desc: description });
        }
      }
    }
  });
}

export default parseTraits;
