

import axios from "axios";
import { createSlice } from '@reduxjs/toolkit'

const API = axios.create({ baseURL: 'https://room-hunt.herokuapp.com'})


const initialState = {
  value: [],
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getUsers: (state) => {
      state.value = API.get("/users")
    },
  },
})

// Action creators are generated for each case reducer function
export const { getUsers } = userSlice.actions

export default userSlice.reducer
