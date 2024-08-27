import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { backendApi } from './slices/backendApiSlice';
import { open5eRaceApi } from './services/races';
import { open5eClassApi } from './services/classes';
import { open5eMonstersApi } from './services/monsters';
import { characterBuilderSliceReducer } from './slices/characterBuilderSlice';
import {
  backendMonstersApi,
  backendCharactersApi,
  backendUsersApi,
} from './services/backend';
import authSliceReducer from './slices/authSlice';

const rootReducer = combineReducers({
  [backendApi.reducerPath]: backendApi.reducer,
  [open5eMonstersApi.reducerPath]: open5eMonstersApi.reducer,
  [open5eClassApi.reducerPath]: open5eClassApi.reducer,
  [open5eRaceApi.reducerPath]: open5eRaceApi.reducer,
  [backendMonstersApi.reducerPath]: backendMonstersApi.reducer,
  [backendCharactersApi.reducerPath]: backendCharactersApi.reducer,
  [backendUsersApi.reducerPath]: backendUsersApi.reducer,
  characterForm: characterBuilderSliceReducer,
  auth: authSliceReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(open5eRaceApi.middleware)
      .concat(open5eClassApi.middleware)
      .concat(open5eMonstersApi.middleware)
      .concat(backendApi.middleware)
      .concat(backendMonstersApi.middleware)
      .concat(backendCharactersApi.middleware)
      .concat(backendUsersApi.middleware),
  devTools: true,
});

export { store };
