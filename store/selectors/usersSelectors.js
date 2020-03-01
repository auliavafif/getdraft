/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';


const selectUsersList = (state) => state.users.list;
const selectUsers = (state) => state.users;
const selectSelectedUser = (state) => state.users.selectedUser;

export const selectFilteredUsersList = createSelector(
  selectUsersList,
  selectUsers,
  (usersList, users) => {
    const { keyword, location, age } = users;
    let filteredUsersList = usersList.filter((item) => item);

    if (keyword && keyword !== '') {
      filteredUsersList = filteredUsersList.filter(
        (item) => (`${item.name.first} ${item.name.last}`).toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !== -1,
      );
    }
    if (location && location !== 'ALL') {
      filteredUsersList = filteredUsersList.filter(
        (item) => item.location.country === location,
      );
    }
    if (age && age !== 'ALL') {
      filteredUsersList = filteredUsersList.filter(
        (item) => {
          if (age === '30') {
            return item.dob.age < 30;
          } if (age === '40') {
            return item.dob.age >= 30 && item.dob.age <= 50;
          }
          return item.dob.age > 50;
        },
      );
    }
    return filteredUsersList;
  },
);

export const selectUser = createSelector(
  selectSelectedUser,
  selectUsersList,
  (selectedUser, usersList) => {
    const userName = decodeURIComponent(selectedUser);

    const filteredUsers = usersList.filter(
      (item) => (`${item.name.first} ${item.name.last}`).toLocaleLowerCase().indexOf(userName) !== -1,
    );

    console.log(usersList);
    if (filteredUsers.lentgh === 0) {
      return null;
    }
    return filteredUsers[0];
  },
);
