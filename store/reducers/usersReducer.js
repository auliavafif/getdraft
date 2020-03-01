/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import {
  GET_USERS_SUCCESS, GET_USERS_FAILURE, UPDATE_SEARCH_KEYWORD, UPDATE_SEARCH_LOCATION, UPDATE_SEARCH_AGE,
} from '../constants/usersConstants';


const usersReducer = createReducer({
  page: 0, list: [], error: {}, keyword: '', age: 'ALL', location: 'ALL',
}, {
  [GET_USERS_SUCCESS]: (state, action) => {
    const usersList = action.payload.results;
    state.list = [...state.list, ...usersList];
    state.page = action.payload.info.page;
  },
  [GET_USERS_FAILURE]: (state, action) => {
    state.error = action.payload;
  },
  [UPDATE_SEARCH_KEYWORD]: (state, action) => {
    state.search = action.payload;
  },
  [UPDATE_SEARCH_KEYWORD]: (state, action) => {
    state.keyword = action.payload;
  },
  [UPDATE_SEARCH_LOCATION]: (state, action) => {
    state.location = action.payload;
  },
  [UPDATE_SEARCH_AGE]: (state, action) => {
    state.age = action.payload;
  },
});


export default usersReducer;
