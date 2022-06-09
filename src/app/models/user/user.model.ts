import {RoleModel} from './role.model';

export class UserModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  userRole: RoleModel;
  password: string;
  active: boolean;

  public static fromObject(data: any): UserModel {
    const cmd = new UserModel();
    cmd.id = data.id;
    cmd.firstName = data.firstName;
    cmd.lastName = data.lastName;
    cmd.email = data.email;
    cmd.position = data.position;
    cmd.userRole = data.userRole;
    cmd.password = data.password;
    cmd.active = data.active;

    return cmd;
  }

  public static fromArray(data: any[]): UserModel[] {
    return data.map(command => UserModel.fromObject(command));
  }

}
