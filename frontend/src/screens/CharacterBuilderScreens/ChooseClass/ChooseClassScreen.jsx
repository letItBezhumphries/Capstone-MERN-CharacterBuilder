import React from 'react';
import { useState, useEffect } from 'react';
import CharacterBuilderStepMenu from '../CharacterBuilderStepMenu';
import ConfirmationModal from '../../../components/ConfirmationModal';
import FilterOptionItem from '../../../components/FilterOptionItem';
import CharacterNameForm from '../CharacterNameForm';
import PageContainer from '../../../components/PageContainer';
import StepFormControlWrapper from '../StepFormWrapper';
import { useGetClassDataQuery } from '../../../services/classes';
import { characterClasses } from '../../../data/selectors';

const ChooseClassScreen = ({ classes }) => {
  const [temporaryClass, setTemporaryClass] = useState({});
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState({});

  const handleClose = () => setShowConfirmationModal(false);

  /* sets up the ConfirmationModal to open with the race selected to view as a search filter of sorts */
  const handleClassFilterSelect = (classType) => {
    console.log('in handleClassFilterSelect -> class:', classType);
    let classObj = characterRaces.find((c) => c.index === classType);
    setTemporaryClass({
      name: classObj.name,
      index: classObj.index,
      imgSrc: classObj.imgSrc,
    });
    setShowConfirmationModal(true);
  };

  const handleConfirmSelection = (selection) => {
    // send the selection to the store selection for class
    // console.log('in handleConfirmSelection:', selection);
    // set the selectedRace
    setSelectedClass({
      name: selection.name,
      index: selection.index,
      imgSrc: selection.imgSrc,
      ...selection,
    });
    // close the Confirmation Model
    handleClose();
  };

  const handleCancelSelection = () => {
    setShowConfirmationModal(false);
  };

  const { data, error, isLoading } = useGetClassDataQuery('wizard');

  console.log('in home - data:', data);

  return (
    <div id='chclass'>
      <CharacterBuilderStepMenu step0 step1 step2></CharacterBuilderStepMenu>
      <CharacterNameForm />
      {selectedClass?.name && !showConfirmationModal ? (
        <StepFormControlWrapper>
          <PageContainer
            isModal={false}
            isRace={false}
            selection={selectedClass}
          />
        </StepFormControlWrapper>
      ) : (
        <StepFormControlWrapper>
          <div className='filtering-container'>
            {characterClasses.map((cls, idx) => (
              <FilterOptionItem
                key={cls.index}
                name={cls.name}
                index={cls.index}
                imgsrc={cls.imgSrc}
                showConfirmationModal={showConfirmationModal}
              />
            ))}
          </div>
        </StepFormControlWrapper>
      )}

      {showConfirmationModal ? (
        <ConfirmationModal
          show={showConfirmationModal}
          onHide={handleClose}
          isRace={false}
          isClass={true}
          selection={temporaryClass}
          onSelectionConfirm={handleConfirmSelection}
          onSelectionCancel={handleCancelSelection}
          // handleClose={handleClose}
        />
      ) : null}
    </div>
  );
};

export default ChooseClassScreen;
