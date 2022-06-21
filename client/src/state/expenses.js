import create from "zustand";

export const expenseStore = create((set) => ({
  expenses: [],
  pending: false,
  loading
}))
