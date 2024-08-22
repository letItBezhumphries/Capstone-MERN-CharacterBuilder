import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const raceApi = createApi({
  reducerPath: 'raceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.open5e.com/' }),
  endpoints: (builder) => ({
    getDataForRace: builder.query({
      query: (race) => `races/${race}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataForRaceQuery } = raceApi;
