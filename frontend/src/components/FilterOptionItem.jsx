import React from 'react';
import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import './FilterOptionItem.css';

const FilterOptionItem = ({
  imgsrc,
  name,
  index,
  text,
  onSelectOption,
  showConfirmation,
  closeConfirmation,
  selected,
}) => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // console.log('in FilterOptionItem:', selected);

  const handleSelectionClick = () => {
    onSelectOption(index);
    // handleShow();
  };

  return (
    <>
      <div className='filter-option-item' onClick={handleSelectionClick}>
        <img src={imgsrc} alt={`depiction of the race of ${name}`} />
        <h3 className='option-heading'>
          <div className='option-name'>{name}</div>
          <span className='option-text'>
            {!text ? "Player's Handbook (2014)" : null}
          </span>
        </h3>
        <div className='option-selector-container'>
          {selected ? (
            <i className='fa-solid fa-chevron-down'></i>
          ) : (
            <i className='fa-solid fa-chevron-right'></i>
          )}
        </div>
      </div>
      {/* <ConfirmationModal
        show={showConfirmation}
        // onHide={handleClose}
        onHide={closeConfirmation}
        backdrop='static'
        keyboard={false}
        // handleClose={handleClose}
      /> */}
    </>
  );
};

export default FilterOptionItem;
