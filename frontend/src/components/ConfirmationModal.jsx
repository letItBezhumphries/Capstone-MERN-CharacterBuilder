import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CollapsibleList from './CollapsibleList';
import { useGetDataForRaceQuery } from '../services/races';
import PageContainer from './PageContainer';
import './ConfirmationModal.css';

function ConfirmationModal({
  show,
  onHide,
  handleClose,
  isRace,
  isClass,
  selection,
  onSelectionConfirm,
  onSelectionCancel,
}) {
  const [raceDescription, setRaceDescription] = useState('');
  const [raceTraitsData, setRaceTraitsData] = useState('');
  const [traitNames, setTraitNames] = useState([]);
  const [traits, setTraits] = useState([]);

  let { data, error, isLoading } = useGetDataForRaceQuery(selection.index);
  // console.log('in confirmationModal selection:', selection);
  // console.log('data in ConfirmationModal:', data);

  useEffect(() => {
    if (!isLoading && data) {
      setRaceDescription(data.desc.slice(2));
      setRaceTraitsData(data.traits);

      let selectedRaceTraits = [];
      let raceTraitNames = [];

      let parsedTraits = data.traits
        .split(/\*\*\_/)
        .filter((str) => str.length > 0);

      parsedTraits.forEach((str, index) => {
        if (selection.index === 'dragonborn') {
          if (index > 0) {
            if (index === 1) {
              let name = str.split('._**')[0];
              let description = str.split('._**')[1];
              let table = parsedTraits[0].split('**')[2];
              if (!raceTraitNames.includes(name)) {
                raceTraitNames.push(name);
                selectedRaceTraits.push({
                  name: name,
                  desc: description,
                  table: table,
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
            selectedRaceTraits.push({ name: name, desc: description });
          }
        }
      });

      setTraitNames([...raceTraitNames]);
      setTraits([...selectedRaceTraits]);
    }
  }, [isLoading, data]);

  const handleSelectionClick = () => {
    // create a new object with all properties included
    const selectionData = {
      ...selection,
      traits: traits,
      traitList: traitNames,
      desc: raceDescription,
      data: raceTraitsData,
    };

    onSelectionConfirm(selectionData);
  };

  const handleCancelClick = (selection) => {
    onSelectionCancel(selection);
  };

  return (
    <>
      {show && !isLoading ? (
        <Modal
          backdrop='static'
          backdropClassName={'confirmation-backdrop'}
          scrollable={true}
          keyboard={false}
          show={show}
          onHide={onHide}
          close={handleClose}
          // make fullscreen
        >
          <Modal.Header className='confirmation-header' closeButton>
            <Modal.Title className='confirmation-title'>
              CONFIRM RACE
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-body'>
            <PageContainer
              isModal={true}
              isRace={true}
              selection={selection}
              isLoading={isLoading}
              traits={traits}
              traitNames={traitNames}
              description={raceDescription}
            />
          </Modal.Body>
          <Modal.Footer className='confirmation-footer'>
            <Button onClick={handleCancelClick} className='cancel-btn'>
              Cancel
            </Button>
            <Button onClick={handleSelectionClick} className='choose-btn'>
              {isRace ? 'Choose Race' : 'Choose Class'}
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
}

export default ConfirmationModal;
