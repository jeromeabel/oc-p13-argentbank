import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: null,
    lastName: null,
    email: null,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
    },
    clearUser: (state, _) => {
      state.firstName = null;
      state.lastName = null;
      state.email = null;
    },
    setName: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    },
  },
});

export const { setUser, clearUser, setName } = userSlice.actions;
export default userSlice.reducer;
export const selectCurrentUser = (state) => {
  return state.user.firstName
    ? state.user
    : {
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
      };
};
