import { combineReducers } from 'redux';

import expenses from './expenses';
import auth from './auth'
import users from './data'

export const reducers = combineReducers({ expenses, auth , users});

