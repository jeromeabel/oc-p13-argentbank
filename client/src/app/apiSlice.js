import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api', // cached reducer
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (!headers.has('Authorization') && token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => {
        return {
          url: '/user/login',
          method: 'POST',
          body: credentials,
        };
      },
    }),
    getUser: builder.mutation({
      query: () => {
        return {
          url: '/user/profile',
          method: 'POST',
        };
      },
    }),
  }),
});

export const { useLoginMutation, useGetUserMutation } = api;
