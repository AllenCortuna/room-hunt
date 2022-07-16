import create from "zustand";
import axios from "axios";

const api = axios.create({ baseURL: "https://webrecord.herokuapp.com" });
export const expenseStore = create((set) => ({
  expense: [],
  loading: false,
  error: false,

  getExpenses: async () => {
    try {
      const response = await api.get("/expense");
      set({ expense: response.data });
      console.log("get ok");
    } catch (err) {
      console.log(err.message);
    }
  },

  createExpense: async ({data,state}) => {
    try {
      await api.post("/expense", data);
      set(state => ({expense: [...state.expense, data]}));
    } catch (err) {
      console.log(err.message);
    }
  },

  deleteExpense: async ({ id, state }) => {
    try {
      await api.delete(`/expense/${id}`);
      set((state) => ({
        expense: state.expense.filter((a) => a._id !== id),
      }));
    } catch (err) {
      console.log(err.message);
    }
  },
}));
