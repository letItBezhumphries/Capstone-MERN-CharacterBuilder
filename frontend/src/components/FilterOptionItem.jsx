import React from 'react';
import './FilterOptionItem.css';

const FilterOptionItem = ({
  imgsrc,
  name,
  index,
  text,
  onSelectOption,
  isRace,
  optionSelected,
}) => {
  const handleSelectionClick = () => {
    onSelectOption(index);
  };

  return (
    <>
      <div className='filter-option-item' onClick={handleSelectionClick}>
        <img
          src={imgsrc}
          alt={
            isRace
              ? `depiction of the race of ${name}`
              : `depiction of a ${name} class character`
          }
        />
        <h3 className='option-heading'>
          <div className='option-name'>{name}</div>
          {isRace ? (
            <span className='option-text'>
              {!text ? "Player's Handbook (2014)" : null}
            </span>
          ) : null}
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
