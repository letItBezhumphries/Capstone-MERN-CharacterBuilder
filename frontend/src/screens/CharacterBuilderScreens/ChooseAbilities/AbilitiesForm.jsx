import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../../../components/FormContainer';
import './AbilitiesForm.css';

const AbilitiesForm = () => {
  const abilityRolls = [8, 10, 12, 13, 14, 15];
  const [remainingAbilityRolls, setRemainingAbilityRolls] = useState(
    abilityRolls.slice()
  );
  const abilities = [
    'Strength',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Dexterity',
    'Charisma',
  ];

  const [abilityRollType, setAbilityRollType] = useState('standard');
  const [strength, setStrength] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [charisma, setCharisma] = useState(0);

  const handleRollTypeSelect = (e) => {
    console.log('the type of roll selected is :', e.target.value);
    setAbilityRollType(e.target.value);
  };

  const handleAbilityScoreAdded = (e) => {
    e.preventDefault();
    console.log('target element:', e.target);
    let selectedRoll = e.target.value;
    console.log('in handleAbilityScoreAdded:', selectedRoll);
    let remainingRolls = remainingAbilityRolls.filter((roll) => {
      return roll !== parseInt(selectedRoll);
    });

    console.log('remainingRolls:', remainingRolls);
    setRemainingAbilityRolls([...remainingRolls]);
  };

  // console.log('abilityRollType:', abilityRollType);

  return (
    // <FormContainer width={'80%'}>
    <form className='abilities-form'>
      <div className='abilities-inner-container'>
        <h3>Ability Scores</h3>

        <div style={{ marginBottom: '20px' }}>
          <select
            name='ability'
            id='ability'
            onChange={handleRollTypeSelect}
            className='select-ability'
          >
            <option value='standard'>Standard Array</option>
            <option value='manual'>Manual Rolled</option>
          </select>
        </div>

        <div className='ability-scores-board'>
          {abilities.map((ability, idx) => {
            return (
              <div className='ability-score-stat' key={idx}>
                <span className='ability-labelbox'>
                  <label
                    htmlFor={`qry_${ability}`}
                    className='ability-score-label'
                  >
                    {ability}
                  </label>
                </span>
                <span className='ability-score'>
                  <select
                    name='ability-score'
                    id={ability}
                    data-select-ability={ability}
                    className='select-ability'
                    onChange={handleAbilityScoreAdded}
                  >
                    <option value='--'>--</option>
                    {remainingAbilityRolls.map((ab, idx) => (
                      <option key={idx} value={ab}>
                        {ab}
                      </option>
                    ))}
                  </select>
                </span>
                <div className='ability-score-total'>Total: </div>
              </div>
            );
          })}
        </div>
      </div>
    </form>

    // </FormContainer>
  );
};

export default AbilitiesForm;
