import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../../../components/FormContainer';

const AbilitiesForm = () => {
  const [abilitiesStandardArray, setAbilitiesStandardArray] = useState([
    8, 10, 12, 13, 14, 15,
  ]);
  const abilities = [
    'Strength',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Dexterity',
    'Charisma',
  ];

  const [abilityRoll, setAbilityRoll] = useState('standard');
  const [strength, setStrength] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [charisma, setCharisma] = useState(0);

  const handleAbilitySelect = (e) => {
    setAbilityRoll(e.target.value);
  };

  return (
    <FormContainer>
      <h2>Ability Scores</h2>
      <select name='ability' id='ability' onChange={handleAbilitySelect}>
        <option value='standard'>Standard Array</option>
        <option value='manual'>Manual Rolled</option>
      </select>

      <div className='ability-scores-board'>
        {abilities.map((ability, idx) => {
          return (
            <div className='ability-score-stat' key={ability + idx}>
              <span className='ability-score-label'>{ability}</span>
              <span className='ability-score-input'>
                <select
                  name='ability-score'
                  id={ability}
                  data-select-ability={ability}
                >
                  <option value='--'>--</option>
                  {setAbilitiesStandardArray.map((abilityScore, idx) => (
                    <option key={idx} value={abilityScore}>
                      {abilityScore}
                    </option>
                  ))}
                </select>
              </span>
              <div className='ability-score-total'>Total: </div>
            </div>
          );
        })}
      </div>
    </FormContainer>
  );
};

export default AbilitiesForm;
