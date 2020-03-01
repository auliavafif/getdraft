/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { GET_USERS_LOADING } from '../constants/loadingConstants';


const loadingReducer = createReducer({}, {
  [GET_USERS_LOADING]: (state, action) => {
    state.getUsers = action.payload;
  },
});


export default loadingReducer;
