import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const open5eRaceApi = createApi({
  reducerPath: 'open5eRaceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.open5e.com/' }),
  endpoints: (builder) => ({
    getDataForRace: builder.query({
      query: (race) => `races/${race}`,
    }),
    keepUnusedDataFor: 5,
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataForRaceQuery } = open5eRaceApi;
