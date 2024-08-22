import React from 'react';
import { useState, useEffect } from 'react';
import CharacterBuilderStepMenu from '../CharacterBuilderStepMenu';
import ConfirmationModal from '../../../components/ConfirmationModal';
import FilterOptionItem from '../../../components/FilterOptionItem';
import FormContainer from '../../../components/FormContainer';
import CharacterNameForm from '../CharacterNameForm';
import PageContainer from '../../../components/PageContainer';
import { characterRaces } from '../../../data/selectors';
import './ChooseRaceScreen.css';

const ChooseRaceScreen = () => {
  const [raceToConfirm, setRaceToConfirm] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedRace, setSelectedRace] = useState({});

  const handleClose = () => setShowConfirmation(false);

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

  const handleConfirmSelection = (selection) => {
    // send the selection to the store selection for race
    // console.log('in handleConfirmSelection:', selection);
    // set the selectedRace
    setSelectedRace({
      name: selection.name,
      index: selection.index,
      imgSrc: selection.imgSrc,
      ...selection,
    });
    // close the Confirmation Model
    handleClose();
  };

  const handleCancelSelection = () => {
    setShowConfirmation(false);
  };

  return (
    <div id='chrace'>
      <CharacterBuilderStepMenu step0 step1></CharacterBuilderStepMenu>
      <CharacterNameForm />
      {selectedRace?.name && !showConfirmation ? (
        <FormContainer>
          <PageContainer
            isModal={false}
            isRace={true}
            selection={selectedRace}
            traits={selectedRace.traits}
            traitNames={selectedRace.traitList}
            description={selectedRace.desc}
          />
        </FormContainer>
      ) : (
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
                optionSelected={raceToConfirm}
              />
            ))}
          </div>
        </FormContainer>
      )}

      <ConfirmationModal
        show={showConfirmation}
        onHide={handleClose}
        isRace={true}
        isClass={false}
        selection={raceToConfirm}
        onSelectionConfirm={handleConfirmSelection}
        onSelectionCancel={handleCancelSelection}
        // handleClose={handleClose}
      />
    </div>
  );
};

export default ChooseRaceScreen;
