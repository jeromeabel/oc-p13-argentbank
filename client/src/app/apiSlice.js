import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1',
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token || localStorage.getItem('token');
      if (!headers.has('Authorization') && token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => {
        return {
          url: '/user/login',
          method: 'POST',
          body,
          // credentials: 'include',
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
    setUserName: builder.mutation({
      query: (body) => {
        return {
          url: '/user/profile',
          method: 'PUT',
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useGetUserMutation, useSetUserNameMutation } =
  api;
