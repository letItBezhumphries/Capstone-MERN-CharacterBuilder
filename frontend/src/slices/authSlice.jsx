/*
this will simply set the user credentials to localStorage and remove them
 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // remember need to set the state as well as setItem in localStorage
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      // clear the localStorage
      localStorage.clear();
    },
  },
});

// need to be able to call setCredentials as an action so we can export is as so
export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
