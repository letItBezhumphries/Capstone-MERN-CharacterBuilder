import React from 'react';
import { useState, useEffect } from 'react';
import CharacterBuilderStepMenu from '../CharacterBuilderStepMenu';
import ConfirmationModal from '../../../components/ConfirmationModal';
import FilterOptionItem from '../../../components/FilterOptionItem';
import FormContainer from '../../../components/FormContainer';
import CharacterNameForm from '../CharacterNameForm';
import PageContainer from '../../../components/PageContainer';
import { useGetClassDataQuery } from '../../../services/classes';
import { characterClasses } from '../../../data/selectors';

const ChooseClassScreen = ({ classes }) => {
  const handleClassSelect = () => {
    console.log('class was selected');
  };

  const { data, error, isLoading } = useGetDataForRaceQuery('wizard');

  console.log('in home - data:', data);

  return (
    <FormContainer>
      <h1>Choose a Class</h1>
      {classes.map((cls, idx) => (
        <OptionItem imgsrc={cls.imgsrc} name={cls.name} text={cls.desc} />
      ))}
    </FormContainer>
  );
};

export default ChooseClassScreen;
