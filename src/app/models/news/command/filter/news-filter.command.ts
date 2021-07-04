export class NewsFilterCommand {
  // id: number;
  // headline: string;
  description: string;
  // body: string;
  // date: Date;
  category: string;
  // author: string; // type Author

  public static fromObject(data: any): NewsFilterCommand {
    const cmd = new NewsFilterCommand();
    // cmd.id = data.id;
    // cmd.headline = data.headline;
    cmd.description = data.description;
    // cmd.body = data.body;
    // cmd.date = data.date;
    cmd.category = data.category;
    // cmd.author = data.author;

    return cmd;
  }
  //
  // public static fromArray(data: any[]): NewsFilterCommand[] {
  //   return data.map(command => NewsFilterCommand.fromObject(command));
  // }

}
