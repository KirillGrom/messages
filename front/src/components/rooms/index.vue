<template>
  <div class="rooms">
    <ul class="rooms__list">
      <li
      v-for="(room, index) in roomList"
      :key="index"
      class="rooms__item">
        <a
        href="#"
        class="rooms__button"
        @click.prevent="onJoinRoom(index)">
          {{room.nameRomm}}
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
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
  @Component({
    name: 'Rooms',
  })
export default class Rooms extends Vue {

  roomList = [
    {
      nameRomm: 'Romm 1',
    },
    {
      nameRomm: 'Romm 2',
    },
    {
      nameRomm: 'Romm 3',
    },
  ]

  onJoinRoom(indexRomms: number) {
    console.log('Join', this.roomList[indexRomms].nameRomm);
  }

  onCreateRoom(): void {
    this.roomList
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
