// because project is working with backend api we need to import both createApi, and
// fetchBaseQuery which allows us to make requests to our backend api
// helps to pass headers to handle endpoints differently ?
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

// import the urls
import { BASE_OPEN5E_URL } from '../constants/open5eApiConstants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_OPEN5E_URL });

// tagTypes used to define what data type is being fetched from the api

// endpoints and builder is going to handle the try catch? to make other requests
export const open5eServiceApi = createApi({
  baseQuery,
  tagTypes: ['Monster', 'Class', 'Race', 'Spells'],
  endpoints: (builder) => ({}),
});
