import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { backendApi } from './slices/backendApiSlice';
import { raceApi } from './services/races';
import { characterClassApi } from './services/classes';
import { monstersApi } from './services/monsters';
import {
  characterFormStepReducer,
  addNameStep,
  addRaceStep,
} from './slices/characterFormStepSlice';
import authSliceReducer from './slices/authSlice';

const rootReducer = combineReducers({
  [backendApi.reducerPath]: backendApi.reducer,
  [monstersApi.reducerPath]: monstersApi.reducer,
  [characterClassApi.reducerPath]: characterClassApi.reducer,
  [raceApi.reducerPath]: raceApi.reducer,
  characterForm: characterFormStepReducer,
  auth: authSliceReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(raceApi.middleware)
      .concat(characterClassApi.middleware)
      .concat(monstersApi.middleware)
      .concat(backendApi.middleware),
  devTools: true,
});

export { store, addNameStep, addRaceStep };
