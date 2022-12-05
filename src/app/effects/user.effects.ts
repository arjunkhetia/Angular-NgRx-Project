import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { loadUsersFailure, loadUsersFromAPI, loadUsersSuccess } from '../actions/user.actions';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) { }

  loadUsersFromAPI = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsersFromAPI),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map((users: any) => loadUsersSuccess(users)),
          catchError(() => of(loadUsersFailure))
        )
      )
    )
  )

}
