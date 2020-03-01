import { createAction } from '@reduxjs/toolkit';
import {
  GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE, UPDATE_SEARCH_KEYWORD,
  UPDATE_SEARCH_LOCATION, UPDATE_SEARCH_AGE, UPDATE_SELECTED_USER,
} from '../constants/usersConstants';


export const getUsersRequest = createAction(GET_USERS_REQUEST);

export const getUsersSuccess = createAction(GET_USERS_SUCCESS);

export const getUsersFailure = createAction(GET_USERS_FAILURE);

export const updateSearchKeyword = createAction(UPDATE_SEARCH_KEYWORD);

export const updateSearchAge = createAction(UPDATE_SEARCH_AGE);

export const updateSearchLocation = createAction(UPDATE_SEARCH_LOCATION);

export const updateSelectedUser = createAction(UPDATE_SELECTED_USER);
