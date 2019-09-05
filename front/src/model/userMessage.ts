
// import UserInterface from '@/model/userInterface';
interface Messages {
  text: string;
  date: string;
  type: string;
}
export default class UserMessages {
  private text: string;
  private date: string;
  private user: UserInterface;
  private type: string;

  constructor({ text, date, type }: Messages, user: UserInterface) {
    this.text = text;
    this.date = date;
    this.user = user;
    this.type = type;
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
  private changeTypeMessage(newType: string):void{
    const allowedTYpe = ['main','frinds','admin'];
    
    if (allowedTYpe.some(type => type === newType)) {
      this.type = newType;
    }
  }
  public changeType(type:string):any{
    this.changeTypeMessage(type);
    return this;
  }
  
}
