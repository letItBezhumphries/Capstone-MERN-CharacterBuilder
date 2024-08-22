import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './services/pokemon';
import { raceApi } from './services/races';
import { characterClassApi } from './services/classes';
import { monstersApi } from './services/monsters';
import {
  characterFormReducer,
  setNameStep,
  setRaceStep,
} from './slices/characterFormSlice';

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [monstersApi.reducerPath]: monstersApi.reducer,
  [characterClassApi.reducerPath]: characterClassApi.reducer,
  [raceApi.reducerPath]: raceApi.reducer,
  characterForm: characterFormReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(raceApi.middleware)
      .concat(characterClassApi.middleware)
      .concat(monstersApi.middleware),
});

export { store, setNameStep, setRaceStep };
