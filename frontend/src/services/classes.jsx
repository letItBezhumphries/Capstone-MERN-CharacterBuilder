import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const characterClassApi = createApi({
  reducerPath: 'characterClassApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.open5e.com/' }),
  endpoints: (builder) => ({
    getClassData: builder.query({
      query: (classType) => `classes/${classType}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetClassDataQuery } = characterClassApi;
