import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const monstersApi = createApi({
  reducerPath: 'monstersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.open5e.com/' }),
  endpoints: (builder) => ({
    getMonstersPage: builder.query({
      query: (limit) => `monsters/?limit=${limit}`,
    }),
  }),
});

// https://api.open5e.com/monsters/?limit=
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMonstersPageQuery } = monstersApi;
