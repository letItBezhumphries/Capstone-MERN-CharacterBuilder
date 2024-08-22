import {
  MONSTERS_APIURL,
  MONSTERS_PAGE_APIURL,
} from '../constants/open5eApiConstants';

import { apiSlice } from './apiSlice';

export const monstersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMonsters: builder.query({
      // want to return object
      query: () => ({
        url: MONSTERS_APIURL,
      }),
      keepUnusedDataFor: 5, // this property defines time RTK Query uses to cache query data for specified amount of time after unmounting one component that uses same endpoint and mounts another that uses same endpoint and data
    }),
    getMonstersPageLimit: builder.query({
      query: (limit) => ({
        url: MONSTERS_PAGE_APIURL + limit,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

// exporting naming convention adds use to the front of corresponding query method name and adds Quest to the end of the name
// will import these queries into the components where we would normally dispatch them
export const { useGetMonstersQuery } = monstersApiSlice;
export const { useGetMonstersPageLimitQuery } = monstersApiSlice;
