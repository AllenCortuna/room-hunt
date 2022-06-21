import { FETCH_ALL, FETCH_OWN,CREATE, UPDATE, DELETE} from '../constant';

import * as api from '../api/index.js';

export const getExpenses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchExpenses();
   dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
        console.log(error);
  }
};

export const getOwnExpenses = (myid) => async (dispatch) => {
  try {
    const { data } = await api.fetchOwnExpenses(myid);
    dispatch({ type: FETCH_OWN, payload: data });
  } catch (error) {
        console.log(error);
  }
};

export const createExpense = (expense) => async (dispatch) => {
  try {
    const { data } = await api.createExpense(expense);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    alert(error.message );
    console.log(error.message);
  }
};

export const updateExpense = (id, expense) => async (dispatch) => {
  try {
    const { data } = await api.updateExpense(id, expense);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteExpense = (id) => async (dispatch) => {
  try {
    await api.deleteExpense(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

