import create from 'zustand';


export const expendStore = create(set => ({
  expenses: {},
  getExpenses,
  de: () => set(state => ({count: state.count - 1})),

}))
