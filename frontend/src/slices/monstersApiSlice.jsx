import { MONSTERS_URL } from '../constants/constants';
import { backendApi } from './backendApiSlice';

export const monstersBackendApiSlice = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    getMonstersBackend: builder.query({
      query: () => ({
        url: `${MONSTERS_URL}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

// exporting naming convention adds use to the front of corresponding query method name and adds Quest to the end of the name
// will import these queries into the components where we would normally dispatch them
export const { useMonstersBackendQuery } = monstersBackendApiSlice;
