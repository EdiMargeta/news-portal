export class UserSaveCommand {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  userRole: string;
  password: string;
  active: boolean;

  public static fromObject(data: any): UserSaveCommand {
    const cmd = new UserSaveCommand();
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

  public static fromArray(data: any[]): UserSaveCommand[] {
    return data.map(command => UserSaveCommand.fromObject(command));
  }

}
