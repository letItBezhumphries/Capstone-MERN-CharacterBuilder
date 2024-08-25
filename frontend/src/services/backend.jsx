import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const backendMonstersApi = createApi({
  reducerPath: 'backendMonstersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5005' }),
  endpoints: (builder) => ({
    getBackendMonsters: builder.query({
      query: () => `/api/monsters`,
    }),
    keepUnusedDataFor: 5,
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBackendMonstersQuery } = backendMonstersApi;
