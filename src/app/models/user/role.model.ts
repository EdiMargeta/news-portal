export class RoleModel {
  name: string;
  id: number;

  public static fromObject(data: any): RoleModel {
    const cmd = new RoleModel();
    cmd.name = data.name;
    cmd.id = data.id;
    return cmd;
  }


}
