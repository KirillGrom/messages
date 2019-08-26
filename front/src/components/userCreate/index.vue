<template>
  <div class="user">
    <ul class="avatars">
      <li class="avatars__item" v-for=" (avatar, index) in avatarsSvg" :key="index">
        <a href="#" class="avatars__link" @click.prevent="onChooseAvatar(index,$event)">
          <img :src="avatar" alt>
        </a>
      </li>
    </ul>
    <form action @submit.prevent class="nickname">
      <label
        :class="{'invalid': notInvalid}"
        class="nickname__lable">
        NickName !
        <input
          type="text"
          v-model="nickName"
          @input.prevent="onInput"
          class="nickname__input">
        <span>No correct nickname</span>
      </label>
    </form>
    <a class="user__button" @click.prevent="createUser">GO!!</a>
  </div>
</template>
<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import { useStore } from "vuex-simple";
import { isValidName } from '../../utils/rules';
import Socket from "../../store/socket/index";

@Component({
  name: "Component"
})
export default class UserCreate extends Vue {
  public nickName: string;

  public isInvalid: boolean;

  public currentAvatarActive: any;

  public currentIndex: number;

  private avatarsSvg: string[];

  private notInvalid: boolean = false;

  public store: Socket = useStore(this.$store);

  constructor() {
    super();
    this.nickName = "";
    this.isInvalid = false;
    this.currentAvatarActive = null;
    this.currentIndex = 0;
    this.avatarsSvg = [
      "avatar/1.svg",
      "avatar/2.svg",
      "avatar/3.svg",
      "avatar/4.svg",
      "avatar/5.svg",
      "avatar/6.svg"
    ];
  }

  onChooseAvatar(indexAvatar: number, event: any): void {
    if (this.currentAvatarActive !== null) {
      this.currentAvatarActive.classList.remove("active");
    }
    this.currentAvatarActive = event.currentTarget;
    this.currentAvatarActive.classList.add("active");
    this.currentIndex = indexAvatar;
  }

  onInput(): void {
    this.isInvalid = false;
  }

  createUser(): void {
    if (isValidName(this.nickName)) {
      const avatarSrc = this.avatarsSvg[this.currentIndex];
      this.store.socket_setHandle(this.nickName);
      this.store.socket_setAvatar(avatarSrc);
      this.$router.push({ name: 'Rooms' });
      this.notInvalid = false;
    } else {
      this.notInvalid = true;
    }
  }
}
</script>
<style>
.user {
  width: 100%;
  height: 100%;
  background-color: #904397;
  border-radius: 17px;
}
.avatars {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 310px;
  padding: 150px 0 0 0;
  margin: auto;
  list-style: none;
}
.avatars__item {
  width: 33.333%;
}
.avatars__link {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: solid 1px #000;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f7bc32;
  transition: all 0.3s;
}
.avatars__link.active {
  background-color: rgba(247, 188, 50, 0.747);
}
.avatars__link img {
  height: 100%;
}
.nickname {
  width: 350px;
  margin: 75px auto 0 auto;
}
.nickname__lable {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 35px;
  font-weight: 700;
  color: #ffffff;
}
.nickname__lable span {
  display: inline-block;
  margin-top: 15px;
  opacity: 0;
  font-size: 14px;
  transition: opacity .3s;
  color: red;
}
.nickname__lable.invalid span {
  opacity: 1;
}
.nickname__input {
  width: 100%;
  height: 50px;
  font-size: 25px;
  padding-left: 15px;
  border: none;
  border-bottom: 2px solid #e006a9;
  background-color: transparent;
  outline: none;
}

.invalid {
 
}
.user__button {
  display: block;
  width: 90px;
  height: 40px;
  margin: 30px auto 0 auto;
  text-align: center;
  line-height: 2;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  background-color: #96e400;
  border: none;
  cursor: pointer;
}
</style>
