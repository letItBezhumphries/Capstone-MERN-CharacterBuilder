import React from 'react';
import {
  useGetMonstersQuery,
  useGetMonstersPageLimitQuery,
} from '../../slices/monstersApiSlice';

const MonstersScreen = () => {
  // const monstersResponse = useGetMonstersQuery();
  // const { data, error, isLoading } = useGetMonstersQuery();
  // const { loading, monsters, next, prev } = monstersList;

  const { data, error, isLoading } = useGetMonstersPageLimitQuery(25);

  console.log('monstersList in MonstersScreen:', data);

  return (
    <>
      {isLoading ? (
        <h3>is loading...</h3>
      ) : error ? (
        <div>{error.data.message || error.error}</div>
      ) : (
        <>
          <div>
            <h3>Search Available Monsters</h3>
          </div>
        </>
      )}
    </>
  );
};

export default MonstersScreen;
