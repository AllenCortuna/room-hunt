import { FETCH_ALL, FETCH_OWN,CREATE, UPDATE, DELETE} from '../constant';

import * as api from '../api/index.js';

export const getExpenses = () => async () => {
  try {
    const { data } = await api.fetchExpenses();
    { type: FETCH_ALL, payload: data });
  } catch (error) {
        console.log(error);
  }
};

export const getOwnRooms = (myid) => async () => {
  try {
    const { data } = await api.fetchOwnRooms(myid);
    ({ type: FETCH_OWN, payload: data });
  } catch (error) {
        console.log(error);
  }
};

export const createRoom = (room) => async () => {
  try {
    const { data } = await api.createRoom(room);
    ({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message );
  }
};

export const updateRoom = (id, room) => async () => {
  try {
    const { data } = await api.updateRoom(id, room);
    ({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteRoom = (id) => async () => {
  try {
    await api.deleteRoom(id);
    ({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

