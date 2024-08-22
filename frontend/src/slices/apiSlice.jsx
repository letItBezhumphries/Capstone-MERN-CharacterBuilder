// because project is working with backend api we need to import both createApi, and
// fetchBaseQuery which allows us to make requests to our backend api
// helps to pass headers to handle endpoints differently ?
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

// import the urls
import {
  MONSTERS_APIURL,
  RACEAPIURL,
  CLASSAPIURL,
} from '../constants/constants';

const baseQuery = fetchBaseQuery({ baseUrl: MONSTERS_APIURL });

// tagTypes used to define what data type is being fetched from the api

// endpoints and builder is going to handle the try catch? to make other requests
export const apiSlice = createApi({
  baseQuery,
  // tagTypes: ['Monster', 'Character', 'User', 'Class', 'Race'],
  endpoints: (builder) => ({}),
});
