import { AuthStateModel } from '../model/auth-state.model';

export class LoginUser {
  static readonly type = '[USER] Login';

  constructor(public payload: AuthStateModel) {
  }
}

export class LogoutUser {
  static readonly type = '[USER] Logout';

  constructor() {
  }
}

export class LanguageChange {
  static readonly type = '[LANGUAGE] Change';

  constructor(public payload: { locale: string }) {
  }
}
