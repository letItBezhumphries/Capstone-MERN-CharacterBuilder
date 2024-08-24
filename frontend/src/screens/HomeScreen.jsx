import React from 'react';
// import { useGetClassDataQuery } from '../services/classes';
import { useGetDataForRaceQuery } from '../services/races';
import { useGetMonstersPageQuery } from '../services/monsters';
import { useGetCharactersQuery } from '../slices/charactersApiSlice';

const HomeScreen = () => {
  // const { data, error, isLoading } = useGetClassDataQuery('barbarian');

  // const { data, isLoading, error } = useGetCharactersQuery();
  /** BRING IN THE CHARACTERS */

  const { data, error, isLoading } = useGetMonstersPageQuery(30);

  console.log('in home - getMonsters -> data:', data);

  return <div id='home'>HomeScreen</div>;
};

export default HomeScreen;
