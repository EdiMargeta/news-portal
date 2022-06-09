/**
 * State model of user
 */
export class AuthStateModel {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  userRole: 'ADMIN' | 'CUSTOMER' | null;
  id: number | null;

  refreshToken: string | null;
  jwtToken: string | null;

  locale: string;

  public static createEmptyObject(): AuthStateModel {
    const authState = new AuthStateModel();
    authState.email = null;
    authState.firstName = null;
    authState.lastName = null;
    authState.userRole = null;
    authState.id = null;
    authState.jwtToken = null;
    authState.refreshToken = null;
    return authState;
  }

  public static fromObject(data: any = {}): AuthStateModel {
    const authState = new AuthStateModel();
    authState.email = data.email;
    authState.firstName = data.firstName;
    authState.lastName = data.lastName;
    authState.userRole = data.userRole;
    authState.id = data.id;
    authState.jwtToken = data.jwtToken;
    authState.refreshToken = data.refreshToken;
    return authState;
  }


}



