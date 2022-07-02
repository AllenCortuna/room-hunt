import create from 'zustand';
import axios from 'axios';

const api = axios.create({ baseURL: 'https://webrecord.herokuapp.com'})
export const expenseStore = create(set=>({
  expense: [],
  loading: false,
  error: false,

  getExpenses: async () =>{
    try {
      const response = await api.get('/expense');
      set({expense: response.data});
      console.log("get ok");
    } catch (err) {
      console.log(err.message);
    }
  },expense
// NOTE: fix //   
  createExpense: async (data) =>{
    try {
      const newExpense = data
      const response = await api.post('/expense',newExpense);
      set({expense: response.data});
    } catch (err) {
      console.log(err.message);
    }
  },
  
  deleteExpense: async (id)=>{
    try {
      const response = await api.delete(`/expense/${id}`)
       
      set({expense: response})
    } catch (err) {
      console.log(err.message);
    }
  }
  
}))
 
 
