import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api', // cached reducer
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1' }),
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token; // token in the store
    if (token) {
      headers.set('authentication', `Bearer ${token}`);
    }
    return headers;
  },
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => {
        return {
          url: '/user/login',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = api;

// headers: {
//   'Content-type': 'application/json; charset=UTF-8',
// },
