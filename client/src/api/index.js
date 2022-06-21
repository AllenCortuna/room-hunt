import axios from 'axios';

const API = axios.create({ baseURL: 'https://room-hunt.herokuapp.com'})
//const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchExpenses = () => API.get('/rooms');
export const createExpense = (newExpense) => API.post('/rooms', newExpense);
export const fetchOwnExpenses = () => API.get('/rooms');
export const updateExpense = (id, updatedExpense) => API.patch(`/rooms/${id}`, updatedExpense);
export const deleteExpense = (id) => API.delete(`/rooms/${id}`);


export const fetchUsers = () => API.get('/user');
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);


