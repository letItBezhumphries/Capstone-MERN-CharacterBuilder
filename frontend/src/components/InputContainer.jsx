import React from 'react';
import { useState } from 'react';
import './InputContainer.css';

const InputContainer = ({ query_num, label, value, classType }) => {
  const [inputVal, setInputVal] = useState(value);

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div className='input-container'>
      <span className='form-input-label'>
        <label htmlFor={`qry_${query_num}`}>{label}</label>
      </span>
      <span className='form-input-field'>
        <input
          type='text'
          id={`qry_${query_num}`}
          className={classType}
          onChange={handleInputChange}
          value={inputVal}
        />
      </span>
    </div>
  );
};

export default InputContainer;
