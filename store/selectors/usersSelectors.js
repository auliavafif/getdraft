/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';


const selectUsersList = (state) => state.users.list;
// const selectUsersSearchFilters = (state) => state.users.search;

export const selectUsersAges = createSelector(
  selectUsersList,
  (usersList) => {
    const usersAges = usersList.map((item) => item.dob.age);
    return usersAges;
  },
);
