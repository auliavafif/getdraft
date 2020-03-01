/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../constants/usersConstants';


const usersReducer = createReducer({ list: [], error: {} }, {
  [GET_USERS_SUCCESS]: (state, action) => {
    const usersList = action.payload;
    state.list = [...state.list, ...usersList];
  },
  [GET_USERS_FAILURE]: (state, action) => {
    state.error = action.payload;
  },
});


export default usersReducer;
