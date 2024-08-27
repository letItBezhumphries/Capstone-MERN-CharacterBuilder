import { useEffect } from 'react';
import { useGetBackendCharactersQuery } from '../services/backend';

import StepFormControlWrapper from './CharacterBuilderScreens/StepFormWrapper';

const HomeScreen = () => {
  // const { data, error, isLoading } = useGetClassDataQuery('barbarian');

  const { data, isLoading, error } = useGetBackendCharactersQuery();
  /** BRING IN THE CHARACTERS */

  useEffect(() => {
    if (!isLoading) {
      console.log(
        'in homeScreen monsters from my characters from my backend:',
        data
      );
    }
  }, [isLoading]);

  return (
    <div id='home'>
      <div className='stepper'>HOME PAGE</div>
    </div>
  );
};

export default HomeScreen;
