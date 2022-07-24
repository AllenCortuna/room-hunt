
import axios from "axios";
import { createSlice } from '@reduxjs/toolkit'

const API = axios.create({ baseURL: 'https://room-hunt.herokuapp.com'})


const initialState = {
  value: 0,
}

export const listSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    getLists: (state) => {
      state.value = API.get("/lists")
    },

  },
})

// Action creators are generated for each case reducer function
export const { getLists } = listSlice.actions

export default listSlice.reducer
