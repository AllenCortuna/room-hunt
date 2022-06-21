


import { FETCH_ALL,FETCH_OWN, CREATE, UPDATE, DELETE,} from '../constant';
// eslint-disable-next-line
export default (expenses = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_OWN:
      return action.payload;
    case CREATE:
      return [...expenses, action.payload];
    case UPDATE:
      return expenses.map((expens) => (expens._id === action.payload._id ? action.payload : expens));
    case DELETE:
      return expenses.filter((expens) => expens._id !== action.payload);
    default:
      return expenses;
  }
};


