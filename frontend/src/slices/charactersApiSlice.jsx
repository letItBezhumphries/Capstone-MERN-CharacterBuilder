import { CHARACTERS_URL } from '../constants/constants';
import { backendApi } from './backendApiSlice';

export const charactersApiSlice = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => ({
        url: CHARACTERS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getCharacterDetails: builder.query({
      query: (chrId) => ({
        url: `${CHARACTERS_URL}/${chrId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createCharacter: builder.mutation({
      query: (character) => ({
        url: `${CHARACTERS_URL}/new`,
        method: 'POST',
        body: { ...character },
      }),
    }),
  }),
});

// export the query
export const {
  useGetCharactersQuery,
  useGetCharacterDetailsQuery,
  useCreateCharacterMutation,
} = charactersApiSlice;
