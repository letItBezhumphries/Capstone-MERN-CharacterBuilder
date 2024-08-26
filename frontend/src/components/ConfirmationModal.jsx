import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGetDataForRaceQuery } from '../services/races';
import { useGetClassDataQuery } from '../services/classes';
import { parseClassData } from '../utility/parseClassData';
import PageContainer from './PageContainer';
import { getTableSelectOptions } from '../utility/parseTableString';
import './ConfirmationModal.css';

function ConfirmationModal({
  show,
  onHide,
  handleClose,
  isRace,
  selection,
  onSelectionConfirm,
  onSelectionCancel,
}) {
  const [loading, setLoading] = useState(true);
  const [queryData, setQueryData] = useState(null);
  const [description, setDescription] = useState('');
  const [equipment, setEquipment] = useState('');
  const [raceDescription, setRaceDescription] = useState('');
  const [raceTraitsData, setRaceTraitsData] = useState('');
  const [traitNames, setTraitNames] = useState([]);
  const [traits, setTraits] = useState([]);
  const [tableData, setTableData] = useState('');

  // console.log('in confirmationModal selection:', selection);
  // console.log('data in ConfirmationModal:', data);
  let getData;

  if (!isRace) {
    // assign alias for class rtk query
    getData = useGetClassDataQuery;
  } else {
    // assign alias for race rtk query
    getData = useGetDataForRaceQuery;
  }

  const { data, isLoading, error } = getData(selection.index);

  useEffect(() => {
    if (!isLoading && data) {
      /* HERE handle parsing the data needed to handle classes 

      */
      if (!isRace) {
        console.log('in useEffect ConfirmModal class data:', data);
        const classData = parseClassData(data);

        setQueryData(classData);
        // setLoading(false);
      } else {
        console.log('in useEffect ConfirmModal - race data:', data);

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

        setTraitNames([...raceTraitNames]);
        setTraits([...selectedRaceTraits]);
      }
    }
  }, [isRace, isLoading, data]);

  const handleSelectionClick = () => {
    // create a new object with all properties included
    /*  !! NEED TO HANDLE DIFFERENT SELECTION DEPENDING ON IF isRace is true or not */
    /* ! ALSO NEED to add redux action here to store selection in state */
    if (!isRace) {
      console.log('handleSelectionClick MODAL - querydata:', queryData);
      const selectionData = {
        ...selection,
        ...queryData,
      };

      onSelectionConfirm(selectionData);
    } else {
      const selectionData = {
        ...selection,
        traits: traits,
        traitList: traitNames,
        desc: raceDescription,
        data: raceTraitsData,
      };

      onSelectionConfirm(selectionData);
    }
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
          onHide={() => handleClose()}
          close={handleClose}
          fullscreen={true}
          // make fullscreen
        >
          <Modal.Header className='confirmation-header'>
            <Modal.Title className='confirmation-title'>
              {isRace ? 'CONFIRM RACE' : 'CONFIRM ADD CLASS'}
            </Modal.Title>
            <button className='close-btn' onClick={handleCancelClick}>
              <i
                className='fa-solid fa-x fa-2xl'
                style={{ color: 'white' }}
              ></i>
            </button>
          </Modal.Header>
          <Modal.Body className='modal-body'>
            {isRace ? (
              <PageContainer
                isModal={true}
                isRace={isRace}
                selection={{
                  ...selection,
                  traits: traits,
                  traitNames: traitNames,
                  desc: description,
                }}
                isLoading={isLoading}
              />
            ) : (
              <PageContainer
                isModal={true}
                isRace={isRace}
                selection={{ ...selection, ...queryData }}
                isLoading={isLoading}
              />
            )}
          </Modal.Body>

          <Modal.Footer className='confirmation-footer'>
            <Button onClick={handleCancelClick} className='cancel-btn'>
              Cancel
            </Button>
            <Button onClick={handleSelectionClick} className='choose-btn'>
              {isRace ? 'Choose Race' : 'Add Class'}
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
}

export default ConfirmationModal;
