import { Injectable } from '@angular/core';
import { AuthStateModel } from '../model/auth-state.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { LanguageChange, LoginUser, LogoutUser } from '../actions/auth.actions';
import { patch } from '@ngxs/store/operators';

@State<AuthStateModel>({
  name: 'authState',
  defaults: {
    ...AuthStateModel.createEmptyObject()
  }
})
@Injectable()
export class AuthState {

  @Selector()
  static getAuthState(state: AuthStateModel): AuthStateModel {
    return state;
  }

  @Action(LoginUser)
  loginUser({ getState, patchState }: StateContext<AuthStateModel>, { payload }: LoginUser): void {
    const state = getState();
    patchState({
      ...state, ...payload
    });
  }

  @Action(LogoutUser)
  logoutUser({ getState, patchState }: StateContext<AuthStateModel>, {}: LogoutUser): void {
    patchState({
      ...AuthStateModel.createEmptyObject()
    });
  }

  @Action(LanguageChange)
  changeLanguage(ctx: StateContext<AuthStateModel>, { payload }: LanguageChange): void {
    ctx.setState(patch(payload));
  }

}
