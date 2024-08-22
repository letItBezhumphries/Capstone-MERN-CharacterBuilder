import React from 'react';
import { useGetPokemonByNameQuery } from '../services/pokemon';
import { useGetClassDataQuery } from '../services/classes';
import { useGetDataForRaceQuery } from '../services/races';
import { useGetMonstersPageQuery } from '../services/monsters';

const HomeScreen = () => {
  // const { data, error, isLoading } = useGetClassDataQuery('barbarian');

  const { data, error, isLoading } = useGetDataForRaceQuery('dwarf');

  // const { data, error, isLoading } = useGetMonstersPageQuery(30);

  console.log('in home - data:', data);

  return <div id='home'>HomeScreen</div>;
};

export default HomeScreen;
