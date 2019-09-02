import { Mutation, State, Getter, Action } from "vuex-simple";
import UserMessages from "@/model/userMessage.ts";
import UserInterface from '@/model/userInterface';
export default class Socket {

  @State()
  public status: string;
  @State()
  public user: UserInterface;
  @State()
  public messages: object[]= [];
  @State()
  public rooms: any = [];
  
  constructor(){
    this.status = '';
    this.user = {
      type: "user",
      name: "",
      avatar: "",
    };
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
  public setUserId(id:string) {
    this.user.id= id;
  }

  @Mutation()
  public socket_addMessage(msg:object): void {
    this.messages.push(msg);
  }

  @Mutation()
  public socket_setRooms(roomsArg:[]):void {
    this.rooms = roomsArg;
  }

  @Mutation()
  public setRoomsId(idRoom:string):void {
    this.user.room = idRoom
  }
  @Getter()
  public get getUser(): UserInterface {
    return this.user;
  }

  @Getter()
  public get getName(): string{
    return this.user.name;
  }
  @Getter()
  public get getAvatar(): any{
    return this.user.avatar;
  }

  @Getter()
  public get getRooms() :[]{
    return this.rooms;
  }

  @Getter()
  public get getMessages(): object[] {
    return this.messages
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
  @Action()
  public socket_asyncSetRoom(idRoom: string):void {
    this.setRoomsId(idRoom);
  }
  @Action()
  public socket_asyncSetRooms(roomsArg:[]){
    
    this.socket_setRooms(roomsArg);
  }
  public async asyncSetUserId(id: string){
    this.setUserId(id);
  }
  @Action()
  public socket_asyncNewMessage(msg:UserMessages) {
    console.log(msg);
    this.socket_addMessage(msg);
  }

}
