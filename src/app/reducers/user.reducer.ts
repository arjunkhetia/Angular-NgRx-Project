import { Action, createReducer, on } from '@ngrx/store';
import { addUser, deleteUser, loadUsersFailure, loadUsersSuccess } from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface State { }

export const initialState: State = { };

export const reducer = createReducer(
  initialState,
  on(addUser, (state, action) => {
    const data = action.data;
    return {...state, ...data};
  }),
  on(deleteUser, (state, action) => {
    return {};
  }),
  on(loadUsersSuccess, (state, action) => {
    return {...state, ...action};
  }),
  on(loadUsersFailure, (state, action) => {
    return {};
  })
);
