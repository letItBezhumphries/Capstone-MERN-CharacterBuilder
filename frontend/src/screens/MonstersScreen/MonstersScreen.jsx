import { useEffect, useState } from 'react';
import { useGetMonstersPageQuery } from '../../services/monsters';

const MonstersScreen = () => {
  // const monstersResponse = useGetMonstersQuery();
  // const { data, error, isLoading } = useGetMonstersQuery();
  // const { loading, monsters, next, prev } = monstersList;

  const { data, error, isLoading } = useGetMonstersPageQuery(25);

  useEffect(() => {
    if (!isLoading) {
      console.log('the monsters in MonstersScreen..-> ', data);
    }
  }, [isLoading]);

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
