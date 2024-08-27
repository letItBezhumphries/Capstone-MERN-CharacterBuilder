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

export const backendCharactersApi = createApi({
  reducerPath: 'backendCharactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5005' }),
  endpoints: (builder) => ({
    getBackendCharacters: builder.query({
      query: () => `/api/characters`,
    }),
    getCharacterDetails: builder.query({
      query: (id) => ({
        url: `/api/characters/${id}`,
      }),
    }),
    createCharacter: builder.mutation({
      query: (character) => ({
        url: `/api/characters/new/${character.userId}`,
        method: 'POST',
        body: { ...character },
      }),
    }),
    initCharacter: builder.mutation({
      query: () => ({
        url: `/api/characters/new`,
        method: 'POST',
      }),
      // invalidateTags will stop this from getting cached since will use update instead and it wont cause page to refresh
      invalidatesTags: ['Character'],
    }),
    updateCharacter: builder.mutation({
      query: (character) => ({
        url: `${CHARACTERS_URL}/${character.id}`,
        method: 'PUT',
        body: { ...character },
      }),
    }),
    deleteCharacter: builder.mutation({
      query: (id) => ({
        url: `${CHARACTERS_URL}/${id}`,
        method: 'DELETE',
        body: { id },
      }),
    }),
    keepUnusedDataFor: 5,
  }),
});

export const backendUsersApi = createApi({
  reducerPath: 'backendUsersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5005' }),
  endpoints: (builder) => ({
    getBackendUsers: builder.query({
      query: () => `/api/users`,
    }),
    keepUnusedDataFor: 5,
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBackendMonstersQuery } = backendMonstersApi;

export const {
  useGetBackendCharactersQuery,
  useGetCharacterDetailsQuery,
  useCreateCharacterMutation,
  useUpdateCharacterMutation,
  useDeleteCharacterMutation,
} = backendCharactersApi;

export const { useGetBackendUsersQuery } = backendUsersApi;
