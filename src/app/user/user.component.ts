import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser, deleteUser, loadUsersFromAPI } from '../actions/user.actions';
import { user, userId } from '../selectors/user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userExists = false;
  user$!: Observable<any>;
  userId$!: Observable<any>;
  storeKey = '';
  storeValue = '';

  constructor(private store: Store<any>, ) {
    this.user$ = this.store.select(user);
    this.userId$ = this.store.select(userId);
  }

  addToStore() {
    this.store.dispatch(addUser({
      data: {
        [this.storeKey]: this.storeValue
      }
    }));
    this.userExists = true;
    this.storeKey = '';
    this.storeValue = '';
  }

  clearStore() {
    this.store.dispatch(deleteUser());
    this.userExists = false;
  }

  loadUsersFromAPI() {
    this.userExists = true;
    this.store.dispatch(loadUsersFromAPI());
  }

}
