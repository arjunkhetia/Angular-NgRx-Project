import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { StoreModule } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../effects/user.effects';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  exports: [
    UserComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
