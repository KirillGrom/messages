
// import UserInterface from '@/model/userInterface';
interface Messages {
  text: string;
  date: string;
}
export default class UserMessages {
  private text: string;
  private date: string;
  private user: UserInterface;

  constructor({ text, date }: Messages, user: UserInterface) {
    this.text = text;
    this.date = date;
    this.user = user;
  }

  private get getterText (): string{
    return this.text;
  }

  public getText(): string{
    return this.getterText;
  }

  private get getterDate(): string {
    return this.date;
  }

  public getDate(): string {
    return this.getterDate;
  }
  
}
