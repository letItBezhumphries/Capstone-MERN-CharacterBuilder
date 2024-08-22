import React from 'react';
import { useState, useEffect } from 'react';
import CharacterBuilderStepMenu from '../CharacterBuilderStepMenu';
import ConfirmationModal from '../../../components/ConfirmationModal';
import FilterOptionItem from '../../../components/FilterOptionItem';
import FormContainer from '../../../components/FormContainer';
import CharacterNameForm from '../CharacterNameForm';
import { characterRaces } from '../../../data/selectors';
import './ChooseRaceScreen.css';

const ChooseRaceScreen = () => {
  const [raceToConfirm, setRaceToConfirm] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClose = () => setShowConfirmation(false);

  // useEffect(() => {
  //   if (showConfirmation && raceToConfirm.length > 0) {
  //     console.log('in useEffect -> raceToConfirm:', raceToConfirm);
  //     const { data, error, isLoading } = useGetDataForRaceQuery(raceToConfirm);
  //     console.log('in home - data:', data);
  //   }
  // }, [showConfirmation, raceToConfirm]);

  const handleOptionSelect = (race) => {
    console.log('in handleOptionSelect -> race:', race);
    let raceObj = characterRaces.find((r) => r.index === race);
    setRaceToConfirm({
      name: raceObj.name,
      index: raceObj.index,
      imgSrc: raceObj.imgSrc,
    });
    setShowConfirmation(true);
  };

  return (
    <div id='chrace'>
      <CharacterBuilderStepMenu step0 step1></CharacterBuilderStepMenu>
      <CharacterNameForm />
      <FormContainer>
        <h3 className='form-page-header'>Choose a Race</h3>
        <div className='race-filtering-container'>
          {characterRaces.map((race, idx) => (
            <FilterOptionItem
              key={race.index}
              name={race.name}
              index={race.index}
              imgsrc={race.imgSrc}
              onSelectOption={handleOptionSelect}
              showConfirmation={showConfirmation}
              selected={raceToConfirm}
            />
          ))}
        </div>
      </FormContainer>
      <ConfirmationModal
        show={showConfirmation}
        onHide={handleClose}
        isRace={true}
        isClass={false}
        content={raceToConfirm}
        // handleClose={handleClose}
      />
    </div>
  );
};

export default ChooseRaceScreen;
