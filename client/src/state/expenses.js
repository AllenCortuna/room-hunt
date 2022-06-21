import create from 'zustand';
import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000'})



export const expendStore = create(set => ({
  expenses: {},
  loading: false,
  hasErrors: false,

  createExpense: (newExpense)=> async () => {
    set(() => ({ loading: true }));
    try {
      API.post('/rooms', newExpense);
    } catch (err) {
      console.write("error create");
      set(() => ({ hasErrors: true, loading: false }));
    }
  },


  getExpenses: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await API.get('/expenses')
      set((state) => ({ data: (state.data = response.data), loading: false }));
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }
  },

}));
