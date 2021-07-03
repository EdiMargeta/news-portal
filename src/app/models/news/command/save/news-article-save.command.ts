export class NewsArticleSaveCommand {
  id: number;
  headline: string;
  description: string;
  body: string;
  date: Date;
  category: string;
  author: string; // type Author
  coverImage: string;

  public static fromObject(data: any): NewsArticleSaveCommand {
    const cmd = new NewsArticleSaveCommand();
    cmd.id = data.id;
    cmd.headline = data.headline;
    cmd.description =   data.description;
    cmd.body = data.body;
    cmd.date = data.date;
    cmd.category = data.category;
    cmd.author = data.author;
    cmd.coverImage = data.coverImage;

    return cmd;
  }

  public static fromArray(data: any[]): NewsArticleSaveCommand[] {
    return data.map(command => NewsArticleSaveCommand.fromObject(command));
  }

}
