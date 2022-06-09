export class UserFilterCommand {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  userRole: string;

  public static fromObject(data: any): UserFilterCommand {
    const cmd = new UserFilterCommand();
    cmd.id = data.id;
    cmd.firstName = data.firstName;
    cmd.lastName = data.lastName;
    cmd.email = data.email;
    cmd.position = data.position;
    cmd.userRole = data.userRole;

    return cmd;
  }

  public static fromArray(data: any[]): UserFilterCommand[] {
    return data.map(command => UserFilterCommand.fromObject(command));
  }

}
