import React from 'react';
import CharacterBuilderStepMenu from '../CharacterBuilderStepMenu';
import CharacterNameForm from '../CharacterNameForm';
import './CharacterBuilder.css';

const CharacterBuilder = () => {
  return (
    <>
      <CharacterBuilderStepMenu step0 />
      <CharacterNameForm />
    </>
  );
};

export default CharacterBuilder;
