import { configureStore } from '@reduxjs/toolkit';
import listSlice from './listSlice';
import userSlice from './userSlice';
export const store = configureStore({
  reducer: {
    list : listSlice,
    user : userSlice,
  },
})
