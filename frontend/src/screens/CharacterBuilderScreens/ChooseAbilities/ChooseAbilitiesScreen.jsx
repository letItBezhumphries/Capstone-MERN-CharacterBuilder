import React from 'react';
import { useState, useEffect } from 'react';
import CharacterBuilderStepMenu from '../CharacterBuilderStepMenu';
import CharacterNameForm from '../CharacterNameForm';
import StepFormControlWrapper from '../StepFormWrapper';
import AbilitiesForm from './AbilitiesForm';

import FormContainer from '../../../components/FormContainer';
import './ChooseAbilitiesScreen.css';

const ChooseAbilitiesScreen = () => {
  return (
    <div id='chabilities'>
      <CharacterBuilderStepMenu
        step0
        step1
        step2
        step3
      ></CharacterBuilderStepMenu>
      <CharacterNameForm />
      <StepFormControlWrapper>
        <AbilitiesForm />
      </StepFormControlWrapper>
    </div>
  );
};

export default ChooseAbilitiesScreen;
