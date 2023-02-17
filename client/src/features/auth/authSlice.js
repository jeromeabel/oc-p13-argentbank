// //reducers
// // features/auth/authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   loading: false,
//   userInfo: {}, // for user object
//   userToken: null, // for storing the JWT
//   error: null,
//   success: false, // for monitoring the registration process.
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: {},
// });

// export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { User } from '../../app/services/auth';
// import type { RootState } from '../../app/store';

const slice = createSlice({
  name: 'auth',
  initialState: { name: null, token: null },
  reducers: {
    setCredentials: (state, { payload: { name, token } }) => {
      state.name = name;
      state.token = token;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
