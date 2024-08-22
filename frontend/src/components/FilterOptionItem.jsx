import React from 'react';
import './FilterOptionItem.css';

const FilterOptionItem = ({
  imgsrc,
  name,
  index,
  text,
  onSelectOption,
  showConfirmation,
  closeConfirmation,
  optionSelected,
}) => {
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
          {optionSelected ? (
            <i className='fa-solid fa-chevron-down'></i>
          ) : (
            <i className='fa-solid fa-chevron-right'></i>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterOptionItem;
