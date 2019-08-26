import { Mutation, State, Getter, Action } from "vuex-simple";

interface User {
  name: string,
  avatar: string,
}
export default class Socket {

  @State()
  public status: string;
  @State()
  public user: User;
  @State()
  public messages: object[]= [];

  constructor(){
    this.status = '';
    this.user = {
      name: '',
      avatar: '',
    }
  }
  @Mutation()
  public socket_connect(): void {
    this.status= 'connsect';
  }
  @Mutation()
  public socket_disconnect(): void{
    this.status = 'disconnect';
  }
  @Mutation()
  public socket_setHandle(name: string): void{
    this.user.name = name;
  }
  @Mutation()
  public socket_setAvatar(avatar: string): void{
    this.user.avatar = avatar;
  }
  @Mutation()
  public socket_addMessage(msg:object): void {
    this.messages.push(msg);
  }
  @Getter()
  public get getName(): string{
    return this.user.name;
  }
  @Getter()
  public get getAvatar(): string{
    return this.user.avatar;
  }

  @Action()
  public  socket_asyncConnect(){
    this.socket_connect();
  }
  @Action()
  public async socket_asyncDisconnect(){
    this.socket_disconnect();
  }
  @Action()
  public async socket_asyncSetHandle(handle: string){
    this.socket_setAvatar(handle);
  }
  @Action()
  public  socket_asyncSetAvatar(avatar: string){
    this.socket_setHandle(avatar);
  } 
  @Action()
  public  socket_asyncAddNewMessage(msg:any) {
    this.socket_addMessage(msg);
 }
}
