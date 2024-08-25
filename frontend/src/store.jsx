import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { backendApi } from './slices/backendApiSlice';
import { open5eRaceApi } from './services/races';
import { open5eClassApi } from './services/classes';
import { open5eMonstersApi } from './services/monsters';
import { characterBuilderSliceReducer } from './slices/characterBuilderSlice';
import { backendMonstersApi } from './services/backend';
import authSliceReducer from './slices/authSlice';

const rootReducer = combineReducers({
  [backendApi.reducerPath]: backendApi.reducer,
  [open5eMonstersApi.reducerPath]: open5eMonstersApi.reducer,
  [open5eClassApi.reducerPath]: open5eClassApi.reducer,
  [open5eRaceApi.reducerPath]: open5eRaceApi.reducer,
  [backendMonstersApi.reducerPath]: backendMonstersApi.reducer,
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
      .concat(backendMonstersApi.middleware),
  devTools: true,
});

export { store };
