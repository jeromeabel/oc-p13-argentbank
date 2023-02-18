import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api', // cached reducer
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1',
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // console.log('GETSTATE :::: ', getState());
      // console.log('HEADERS ::::', headers);
      //headers.set('Accept', 'application/json');
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
          body: { ...credentials },
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

// headers: {
//   'Content-type': 'application/json; charset=UTF-8',
// },
