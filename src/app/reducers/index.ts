import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { isDevMode } from '@angular/core';
import { reducer as userReducer } from './user.reducer';

export const userFeatureKey = 'user';

export const reducers: ActionReducerMap<any> = {
  user: userReducer,
  router: routerReducer,
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state :', state);
    console.log('action :', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = isDevMode() ? [logger] : [];
