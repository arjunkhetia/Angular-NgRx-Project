import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const addUser = createAction(
  '[User] Add User',
  props<{ data: any }>()
);

export const deleteUser = createAction(
  '[User] Delete User'
);

export const loadUsersFromAPI = createAction(
  '[User] Load Users From API'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: any }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
