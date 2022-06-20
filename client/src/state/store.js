import create from 'zustand';


export const store = create(set => ({
  count: 0,
  inc: () => set(state => ({count: state.count + 1})),
  de: () => set(state => ({count: state.count - 1})),

}))
