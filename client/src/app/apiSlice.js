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
  // tagTypes: ['User'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => {
        return {
          url: '/user/login',
          method: 'POST',
          body: credentials,
        };
      },
      // invalidatesTags: ['User'],
      // providesTags: ['User'],
    }),
    getUser: builder.mutation({
      query: () => {
        return {
          url: '/user/profile',
          method: 'POST',
        };
      },
      // providesTags: ['User'],
      // invalidatesTags: ['User'],
    }),
    setUserName: builder.mutation({
      query: (body) => {
        return {
          url: '/user/profile',
          method: 'PUT',
          body,
        };
      },
      // invalidatesTags: ['User'],
      // providesTags: ['User'],
    }),
  }),
});

export const { useLoginMutation, useGetUserMutation, useSetUserNameMutation } =
  api;
