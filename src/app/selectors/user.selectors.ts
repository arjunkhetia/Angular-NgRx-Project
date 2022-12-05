import { createFeatureSelector, createSelector } from '@ngrx/store';

export const user = createFeatureSelector<any>('user');

export const userId = createSelector(
    user,  // (state: any) => state['user'],
    (user: any) => user.id
);
