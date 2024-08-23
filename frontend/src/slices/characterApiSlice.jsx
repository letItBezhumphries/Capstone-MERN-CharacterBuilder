import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('character')
  ? JSON.parse(localStorage.getItem('character'))
  : { character };
