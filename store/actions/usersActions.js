import { createAction } from '@reduxjs/toolkit';
import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../constants/usersConstants';


export const getUsersRequest = createAction(GET_USERS_REQUEST);

export const getUsersSuccess = createAction(GET_USERS_SUCCESS);

export const getUsersFailure = createAction(GET_USERS_FAILURE);
