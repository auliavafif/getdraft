/* eslint-disable import/prefer-default-export */
import { createAction } from '@reduxjs/toolkit';
import { GET_USERS_LOADING } from '../constants/loadingConstants';


export const getUsersLoading = createAction(GET_USERS_LOADING);
