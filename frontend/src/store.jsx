import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './services/pokemon';
import { raceApi } from './services/races';
import { characterClassApi } from './services/classes';
import { monstersApi } from './services/monsters';

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [monstersApi.reducerPath]: monstersApi.reducer,
  [characterClassApi.reducerPath]: characterClassApi.reducer,
  [raceApi.reducerPath]: raceApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(raceApi.middleware)
      .concat(characterClassApi.middleware)
      .concat(monstersApi.middleware),
});

export default store;
