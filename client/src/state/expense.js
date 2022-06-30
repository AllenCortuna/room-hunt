import create from 'zustand';
import axios from 'axios';

const api = axios.create({ baseURL: 'https://webrecord.herokuapp.com/expense'})
export const expenseStore = create(set=>({
  expense: [],
  loading: false,
  error: false,

  getExpenses: async () =>{
    try {
      const response = await api.get();
      set({expense: response.data});
      console.log("get ok");
    } catch (err) {
      console.log(err.message);
    }
  },
   
}))
