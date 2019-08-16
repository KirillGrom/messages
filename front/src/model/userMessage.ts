
export default class UserMessages {
  type: string;
  name: string;
  messages: string;
  date: string;
  constructor({ typeArg, nameArg, msgArg, dateArg }: any) {
    this.type = typeArg;
    this.name = nameArg;
    this.messages = msgArg ;
    this.date = dateArg;
  }
}
