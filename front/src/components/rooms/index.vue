<template>
  <div class="rooms">
    <ul class="rooms__list">
      <li
      v-for="(room, index) in store.getRooms"
      :key="index"
      class="rooms__item">
        <a
        href="#"
        class="rooms__button"
        @click.prevent="onJoinRoom(room)">
          {{room}}
        </a>
      </li>
      <li
        class="rooms__item">
          <a
          href="#"
          class="rooms__button-create"
          @click.prevent="onCreateRoom()">
          </a>
      </li>
      <li>
        <input v-model="nameRoom" type="text">
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { useStore } from "vuex-simple";
import Socket from "../../store/socket/index";
  @Component({
    name: 'Rooms',
  })
export default class Rooms extends Vue {
  private store: Socket = useStore(this.$store);

  private nameRoom: string= '';

  created() {
    this.getRooms();
  }

  private goToRoom(nameRoom: string) {
    const user = this.store.getUser;
    user.room = nameRoom;
    this.$socket.emit('goToRoom', user, (data) => {
      if (data === 'string') {
        console.error(data);
      } else {
        this.store.asyncSetUserId(data.userId);
        this.store.socket_asyncSetRoomId(nameRoom);
        this.$router.push('/chat');
      }
    });
    this.$socket.emit('getRooms');
  }

  public onJoinRoom(roomName: string) {
    if (roomName.length > 0) {
      this.goToRoom(roomName);
    }
  }


  private getRooms() {
    this.$socket.emit('getRooms');
  }

  public onCreateRoom(): void {
    this.goToRoom(this.nameRoom);
  }
}


</script>
<style>
  .rooms{
    width: 100%;
    height: 100%;
    border-radius: 17px;
    background-color:#ccc; 
  }
  .rooms__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 15px 0;
    margin: 0;
    list-style: none;
  }
  .rooms__item {
    min-width: 18%;
    margin-bottom: 10px;
    text-align: center;
  }
  .rooms__button{
    text-align: center;
    text-decoration: none;
  }
  .rooms__button::before{
  content: '';
  display: block;
  width: 80px;
  height: 75px;
  margin: 0 auto  5px auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left 0 top 0;
  background-image: url('~@/assets/door2.svg');
  cursor: pointer;
}
.rooms__button:hover::before{
  background-position: left -80px top 0;
}
.rooms__button-create {
  display: block;
  width: 80px;
  height: 75px;
  background-image: url('~@/assets/add.svg');
  background-repeat: no-repeat;
}
</style>
