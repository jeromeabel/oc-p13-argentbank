import { createSlice } from '@reduxjs/toolkit';

/**
 * The User slice based on RTK
 * It stores the user's data : firstName, lastName and email
 * If the rememberMe value is true, it stores also firstName and lastName to the localStorage
 */
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
      if (payload.rememberMe || localStorage.getItem('firstName')) {
        localStorage.setItem('firstName', payload.firstName);
        localStorage.setItem('lastName', payload.lastName);
      }
    },
    clearUser: (state, _) => {
      state.firstName = null;
      state.lastName = null;
      state.email = null;
    },
    setName: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      if (payload.rememberMe || localStorage.getItem('firstName')) {
        localStorage.setItem('firstName', payload.firstName);
        localStorage.setItem('lastName', payload.lastName);
      }
    },
  },
});

export const { setUser, clearUser, setName } = userSlice.actions;
export default userSlice.reducer;

// Export selector
export const selectCurrentUser = (state) => {
  return state.user.firstName
    ? state.user
    : {
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
      };
};
