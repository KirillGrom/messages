<template>
  <div id="app" :data-theme="setDarktheme">
    <button
    class="button-change-theme"
    :class="{ 'button-change-theme--night': nightMode }"
    @click="changeThemeMode">
    </button>
  <div class="app__wrapp">
    <transition name="fade">
        <router-view></router-view>
    </transition>
  </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserCreate from './components/userCreate/index.vue';
// import Rooms from './components/Rooms/index.vue';
import chatRoom from './components/chatRoom/index.vue';

@Component({
  components: {

    UserCreate,
    chatRoom,
  },
})
export default class App extends Vue {
  nightMode = false;

  user = {}

  theme = 'light';

  state = 'init'

  created(): void {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.changeThemeMode();
    }
  }

  get setDarktheme():string {
    return this.nightMode ? 'dark' : 'light';
  }

  changeThemeMode(): void {
    this.nightMode = !this.nightMode;
  }

  onCreateUser() {
    this.state = 'joinRoom';
  }
}
</script>

<style>

#app{
  --myMessageFont:#000000;
  --myMessageBack: #DCF8C6;
  --theirMessage:#000000;
  --theirMessageBack: #ffffff;
  --chatRoomBack: #E1DBD5;
  --messagerPanel: #F0EFEE;
  --colorButton: #027967;
  --shadowSubmit: #1CBF63;
  --colorBack: #E6C9AC;
  --bordorColor:#ECECEC
}
#app[data-theme='dark']{
  --myMessageBack: #264441;
  --myMessageFont:#ffffff;
  --theirMessage:#ffffff;
  --theirMessageBack: #363636;
  --chatRoomBack: #444444;
  --messagerPanel: #888888;
  --colorButton: #027967;
  --shadowSubmit: rgb(19, 122, 64);
  --colorBack: #011216;
  --bordorColor:rgb(117, 117, 117);
}
*,*::after,*::before{
  box-sizing: border-box;
}
img{
  max-width: 100%;
  height: auto;
  display: block;
}
html,body{
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  min-height: 100%;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  flex-direction: column;
  background-color: var(--colorBack);
}
.app__wrapp{
  width: 800px;
  height: 700px;
  margin: auto;
  border-radius: 17px;
}
.button-change-theme{
  position: absolute;
  overflow: hidden;
  top: 10px;
  right: 30px;
  width: 75px;
  height: 75px;
  border:none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;

}
.button-change-theme::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: 150px;
  background-image:  url('~@/assets/timeofday.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left 0% top 0%;
  transition: all .7s;
}

.button-change-theme--night::before{
  transform: rotate(180deg);
  background-position: left 0% top 100%;
}
.door{
  display: block;
  width: 80px;
  height: 75px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left 0 top 0;
  background-image: url('~@/assets/door2.svg');
  cursor: pointer;
}
.door:hover{
  background-position: left -80px top 0;
}
</style>
