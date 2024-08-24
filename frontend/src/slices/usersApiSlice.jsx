import { USERS_URL } from '../constants/constants';
import { backendApi } from './backendApiSlice';

export const usersApiSlice = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      // data is the email and password
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;
