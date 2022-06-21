


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
      return expenses.map((expense) => (expense._id === action.payload._id ? action.payload : expense));
    case DELETE:
      return expenses.filter((expense) => expense._id !== action.payload);
    default:
      return expenses;
  }
};


